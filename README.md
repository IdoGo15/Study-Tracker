# Study Tracker

Study Tracker is my first project using Angular. I developed this app as a solution to a problem I faced during the academic studies semester - tracking my viewing content in Zoom.
The app allows the user to add, edit and delete courses and lectures, as well as mark them as completed or not.
In addition, I made it fit for mobile view as well as web.

Demo: [https://study-tracker.netlify.app/](https://study-tracker.netlify.app/)

## Table Of Contents
- [Study Tracker](#StudyTracker)
  * [Running the project](#running-the-project)
  * [Screenshots](#screenshots)
    + [Main View](#main-view)
    + [New Course](#new-course)
    + [Courses - Mobile Version](#courses---mobile-version)
    + [Lectures - Mobile Version](#lectures---mobile-version)
  * [Tech Stack](#tech-stack)
  
## Running the project

Preferably check the online demo, 

Otherwise:

1. Clone the repo.
2. Run `npm install`
3. Run `npm run build`
4. Run `nodemon app.js`
5. Navigate to frontend folder and Run `ng serve`
6. Navigate to `http://localhost:4200`

## Screenshots

### Main View
The app's main - view where the user can see his courses and lectures.

<p><img src="imgs4rm/main-view.png" width="500" /></p>

### New Course
New Course page, including validation. The New Lecture page is similar.

<p><img src="imgs4rm/new-course.png" width="500" /></p>

### Courses - Mobile Version
List of all the user's courses. For the mobile version I used sidenav.

<p><img src="imgs4rm/mobile-v-courses.png" width="250" /></p>

### Lectures - Mobile Version
List of all the user's lectures. 

<p><img src="imgs4rm/mobile-v.png" width="250" /></p>

## Techstack
1. Angular, Angular Material and Bootstrap. 
2. Express (Node.js), Mongoose (MongoDB).

