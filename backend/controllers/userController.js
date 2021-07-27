require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");


exports.loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400);
            throw new Error("Email does not Exist, please enter a valid email.");

        } else {
            const checkUserPassword = await bcrypt.compare(password, user.password);
            if (checkUserPassword) {
                res.status(200).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,

                })
            } else {
                res.status(400).json({
                    error: "Password Not Correct"
                })
            }
        }

    } catch (error) {
        res.status(401).json({
            error: error.message
        })
    }
}

exports.registerUser = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);

        // check if user exist
        const emailExist = await User.findOne({ email });
        if (emailExist) {
            res.status(400);
            throw new Error("Email Already Exist");
        }

        const user = await new User({
            name,
            email,
            password: hashedPassword
        })

        await user.save();

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });

    } catch (error) {
        res.status(401).json({
            error: error.message
        });
    }
}