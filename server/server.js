const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const sqlController = require('./controllers/sqlController');

const PORT = 3000;

// pre-built middleware
app.use('api/bundle', express.static(path.join(__dirname, '../bundle')));
app.use(express.json());
app.use(bodyParser.json());



// router

// const dbRouter = express.Router();
// dbRouter.get('/api/:muscle', sqlController.getExercises, (req, res, next) => {
//     return res.status(200).json(res.locals.exerciseResult);
// });
// app.use('/api', dbRouter);

// get all exercises of a given muscle (ID)
app.get('/api/:muscle', sqlController.getExercises, (req, res, next) => {
    return res.status(200).json(res.locals.exerciseResult);
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
