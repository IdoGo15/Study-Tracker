const { keys } = require('lodash');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://idogo:Aa146814@zoom-tracker.oqolt.mongodb.net/zoom-tracker?retryWrites=true&w=majority`,
 { useNewUrlParser: true }).then(()=> {
  console.log('Connected to MongoDB successfully :)');
}).catch((e) => {
  console.log("Error connect to MongoDB");
  console.log(e);
});

// To prevent deprecation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
  mongoose
};