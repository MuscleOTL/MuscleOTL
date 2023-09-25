const express = require('express');
const db = require('../models/muscleOTLModels');
require('dotenv').config();

console.log(process.env.PG_URI);

const sqlController = {};

// Middleware to fetch
// sqlController.getExercises = async (req, res, next) => {
//     const { muscle } = req.params;
//     const values = [muscle];

//     // console.log("MUSCLE ID:", muscle)
//     const muscleNameQuery = `SELECT muscle_name from muscles WHERE id = ($1);`
//     const exercisesQuery = `SELECT * FROM exercises WHERE muscle_id = ($1)`;

//     try {
//         // const muscleName = await db.query(muscleNameQuery, values);
//         const exercises = await db.query(exercisesQuery, values);

//         // console.log("Muscle Name: ", muscleName.rows[0].muscle_name);
//         // console.log("List of exericses:", exercises.rows)

//         res.locals.exerciseResult = exercises.rows; // save db query result to location in res.locals
//         // console.log('QUERY RESULT OF EXERCISES', res.locals.exerciseResult);
//     } catch (err) {
//         console.log("Error querying database");
//     }

//     // define elephant/SQL query in const
//     // await db.query

//     return next();
// }

sqlController.getExercises = async (req, res, next) => {
  const { muscle } = req.params;
  const values = [muscle];
  console.log(muscle);

  // console.log("MUSCLE ID:", muscle)
  // const muscleNameQuery = `SELECT muscle_name from muscles WHERE id = ($1);`
  // const exercisesQuery = `SELECT * FROM exercises WHERE muscle_id = ($1)`;
  const muscleIdQuery = `SELECT id FROM muscles WHERE muscle_name = ($1)`;
  const exercisesQuery = `SELECT exercise_name, description FROM exercises WHERE muscle_id = ($1)`;
  try {
    // const muscleName = await db.query(muscleNameQuery, values);
    const idQuery = await db.query(muscleIdQuery, values);
    console.log(idQuery.rows[0].id);
    const id = idQuery.rows[0].id;
    try {
      const values = [id];
      const exerciseQuery = await db.query(exercisesQuery, values);
      res.locals.exerciseInfo = exerciseQuery.rows;
      console.log(exerciseQuery.rows);
    } catch {
      return next({
        message: 'Error in exercisesQuery at sqlController.getExercises',
      });
    }
  } catch (err) {
    return next({
      message: 'Error in muscleIdQuery at sqlController.getExercises',
    });
  }
  // define elephant/SQL query in const
  // await db.query
  return next();
};

module.exports = sqlController;
