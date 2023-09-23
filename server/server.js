const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const sqlController = require('./controllers/sqlController');

const PORT = 3000;


// pre-built middleware
app.use('/bundle', express.static(path.join(__dirname, '../bundle')));
app.use(express.json());
app.use(bodyParser.json());

// router 
const dbRouter = express.Router();

dbRouter.get('/:muscle', sqlController.getExercises, (req, res, next) => {
    return res.status(200).json(res.locals.exerciseResult);
});


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
