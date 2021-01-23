const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

//JWT Secret
const jwtSecret = "33595516646698905189764gdiouwefWTHRgs364568753263578";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    minLength: 1,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  sessions: [{
    token: {
      type: String,
      required: true
    },
    expiredAt: {
      type: Number,
      required: true
    }
  }]
});

//Instance methods

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  //shouldnt be made available
  return _.omit(userObject, ['password', 'sessions']);
}

UserSchema.methods.generateAccessAuthToken = function (){
  const user = this;
  return new Promise((resolve, reject) => {
    //Create the JWT
    jwt.sign({_id: user._id.toHexString()}, jwtSecret, { expiresIn: "15m" }, (err,token) => {
      if(!err){
        resolve(token);
      } else {
        reject();
      }
    })
  }) 
}

UserSchema.methods().generateRefreshAuthToken = function () {
  //generates a 64bytes hex string - it doesnt save it to the database. savesessionsToDatabase() does that.
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err,buf) => {
      if(!err){
        let token = buf.toString('hex');
        return resolve(token);
      }
    })
  })
}

UserSchema.methods.createSession = function () {
  let user = this;

  return user.generateRefreshAuthToken().then((refreshToken) => {
    return savesessionsToDatabase(user,refreshToken);
  }).then((refreshToken) => {
    //saved to databse successfuly and return the refresh token
    return refreshToken;
  }).catch((e) => {
    return Promise.reject('Failed to save session to databse.\n' + e);
  })
}

//Model methods (static methods)


//Helper methods
let savesessionsToDatabase = (user, refreshToken) => {
  //save session to databse
  return new Promise((resolve, reject) => {
    let expiresAt = generateRefreshTokenExpiryTime();

    user.sessions.push({'token': refreshToken, expiresAt});

    user.save().then(() => {
      return resolve(refreshToken);
    }).catch((e) => {
      reject(e);
    });
  })
}

let generateRefreshTokenExpiryTime = () => {
  let daysUntilExpire = "10";
  let secondsUntilExpire = ((daysUntilExpire*24)*60)*60;
  return ((Date.now() / 1000) + secondsUntilExpire);
}
