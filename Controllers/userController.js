const User = require('./../Models/userModel');
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: 'Success',
            message: 'You have been hooked!',
            data: {
                user: newUser
            }
        })
    }
    catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({
                status: 'Signing Up Failed',
                message: 'A user with this Email Address already exists, Please login or use a different email id'
            })
        }
        res.status(500).json({
            status: 'Failure',
            message: 'Sorry! Something went wrong while signing you up, Please try again later!',
            error: err
        })
    }
}

exports.login = async (req, res, next) => {
    try {
        let { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: "Login Failed",
                message: "Please Provide email and password to login!"
            })
        }
        const user = await User.findOne({ email: email }).select('+password');
        if (!user) {
            return res.status(400).json({
                status: "Login Failed",
                message: "Email Address Doesn't Exist, Please provide your valid email address!!!"
            })
        }
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({
                status: "Login Failed",
                message: "Password doesnot match, Please provide your valid password!!!"
            })
        }
        res.status(200).json({
            status: "Login Successfull",
            data: {
                user: user
            }
        })
    }
    catch (err) {

        res.status(500).json({
            status: "Failure",
            Message: "Porblem within the system please try again later!",
            error: err
        })
    }
}

