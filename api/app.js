const express = require('express');
cors = require("cors");
const app = express();

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

  res.header(
      'Access-Control-Expose-Headers',
      'x-access-token, x-refresh-token'
  );

  next();
});

app.use(cors());

const { Course } = require('./db/models/course.model');
const { Lecture } = require('./db/models/lecture.model');

//Get all courses
app.get('/courses', (req,res) => {
  Course.find({}).then((courses) => {
    res.send(courses);
  })
})

// Create a new course
app.post('/courses', (req,res) => {
  let title = req.body.title;

  let newCourse = new Course({
    title
  });
  newCourse.save().then((CourseDoc) => {
    res.send(CourseDoc);
  })
});

app.patch('/courses/:id', (req, res) => {
  Course.findOneAndUpdate({_id: req.params.id}, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  }).catch((e) => {
    console.log(e);
  })
});

app.delete('/courses/:id', (req, res) => {
  Course.findOneAndRemove({_id: req.params.id}).then((removedCourse) => {
    res.send(removedCourse);
  }).catch((e) => {
    console.log(e);
  })
});

app.get('/courses/:courseId/lectures', (req,res) => {
  Lecture.find({_courseId: req.params.courseId}).then((lectures) => {
    res.send(lectures);
  })
});

app.post('/courses/:courseId/lectures', (req,res) => {
  let newLecture = new Lecture({
    title: req.body.title,
    _courseId: req.params.courseId
  });
  newLecture.save().then((newLecture) => {
    res.send(newLecture);
  });
})

app.patch('/courses/:courseId/lectures/:lectureId', (req,res) => {
  //We want to update an existing lecture (specified by lectureId)
  Lecture.findOneAndUpdate({
    _id: req.params.lectureId,
    _courseId: req.params.courseId
  }, {
    $set: req.body,
    modified: new Date().toLocaleString('he-IL', {timeZone:'Asia/Jerusalem'})
     }
  ).then(() => {
    res.send({'message': 'updated successfully'});
  });
});

app.delete('/courses/:courseId/lectures/:lectureId', (req, res) => {
  Lecture.findOneAndRemove({
    _id: req.params.lectureId,
    _courseId: req.params.courseId
  }).then((deleted) => {
    res.send(deleted);
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});