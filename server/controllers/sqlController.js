const express = require('express');
const db = require('../models/muscleOTLModels');

const sqlController = {};

// Middleware to fetch 
sqlController.getExercises = (req, res, next) => {
    
    const muscleId = req.params.muscle;

    // define elephant/SQL query in const
    // await db.query 
    // save db query result to location in res.locals

    return next();
}

module.exports = sqlController;