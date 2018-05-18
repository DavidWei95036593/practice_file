const {body,validationResult} = require(`express-validator/check`);
const {matchedData,sanitize} = require(`express-validator/filter`);
const authRoute= express.Router();
const bcrypt = require(`bcryptjs`);
const express =require(`express`);

const User = require(`../models/user.js`)
