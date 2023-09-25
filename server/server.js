const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const sqlController = require('./controllers/sqlController');
const userController = require('./controllers/userController')

const PORT = 3000;

// pre-built middleware
app.use('api/bundle', express.static(path.join(__dirname, '../bundle'))); // serve static assets to client
app.use(express.json()); // makes req.body available
app.use(bodyParser.json());




// router

// const dbRouter = express.Router();
// dbRouter.get('/api/:muscle', sqlController.getExercises, (req, res, next) => {
//     return res.status(200).json(res.locals.exerciseResult);
// });
// app.use('/api', dbRouter);

app.get('/api/users', userController.getAllUsers, (req, res) => {
    return res.status(200).send(res.locals.users);
});

app.post('/api/signup', userController.createUser, (req, res) => {
    return res.status(200).send(res.locals.person);
});

app.post('/api/login', userController.verifyUser, (req, res) => {
    return res.status(200).send(res.locals.person);
});

// get all exercises of a given muscle (ID)
app.get('/api/:muscle', sqlController.getExercises, (req, res, next) => {
    return res.status(200).json(res.locals.exerciseInfo);
});






//404 if page doesn't exist
app.use('*', (err, req, res, next) => {
    const error = new Error(`Can't find ${res.originalUrl} on the server`);
    err.status = 'fail';
    err.statusCode = 404;
    return next(err);
});

//Global error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error'
    res.status(err.statusCode).json({   //internal server error
        status: err.statusCode,
        message: err.message
    });
})


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
