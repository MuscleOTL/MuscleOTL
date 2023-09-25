const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const userController = {};

/**
 * getAllUsers - retrieve all users from the database and stores it into res.locals
 * before moving on to next middleware.
 */
userController.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        res.locals.users = users;
    } catch (err) {
        return next({ message: "Error in userController.getAllUsers: " + JSON.stringify(err) });
    }

    return next()
};

userController.createUser = async (req, res, next) => {
    const { username, password } = req.body;
  
    // user validate here
    try {
      const person = await User.findOne({ username });
      if (person) return next({ error: "user already exists" });
  
      const newPerson = await User.create({
        username: username,
        password: password,
      });
  
      console.log("password", newPerson.password);
  
      res.locals.person = newPerson;
      // console.log(res.locals.person);
    } catch (err) {
      return next({ message: "user not created successfully" });
    }
    return next();
};

userController.verifyUser = async (req, res, next) => {
    const { username, password } = req.body;
  
    try {
      const person = await User.findOne({
        username: username,
        password: password,
      });

      console.log(person)
      if (!person || !username || !password) {
        throw new Error("incorrect username or password")
      }
  
      res.locals.person = person;  
    } catch (err) {
      return next({
        message: "user not found " + err,
      });
    }
  
    return next();
  };

module.exports = userController;