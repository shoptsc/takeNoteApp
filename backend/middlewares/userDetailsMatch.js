const User = require("../models/userModel");


exports.checkPassword = (req, res, next) => {
    const { password } = req.body;
    try {
        const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/

        if (!password.match(checkPassword)) {
            throw new Error("password must be at least 8 and must contain atleast one uppercase, one lowercase, symbols and number")
        }

        next();
    } catch (error) {
        res.json({ error: error.message })
    }
}


exports.checkEmail = (req, res, next) => {
    const { email } = req.body;
    try {
        const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!email.match(checkEmail)) {
            throw new Error("Enter a valid email address")
        }

        next();
    } catch (error) {
        res.json({ error: error.message })
    }
}