const express = require('express');
const db = require('../models/muscleOTLModels');

const sqlController = {};

// Middleware to fetch 
sqlController.getExercises = async (req, res, next) => {
    const { muscle } = req.params;
    const values = [muscle];

    const queryString = `SELECT * FROM exercises WHERE muscle_id = ($1)`;

    try {
        const data = await db.query(queryString, values);
        res.locals.exerciseResult = data; // save db query result to location in res.locals
        console.log('QUERY RESULT OF EXERCISES', res.locals.exerciseResult);
    } catch (err) {
        console.log("Error querying database");
    }

    // define elephant/SQL query in const
    // await db.query

    return next();
}

module.exports = sqlController;