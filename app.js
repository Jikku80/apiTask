const express = require('express');

const userRouter = require('./Routes/userRoute');

const app = express();

if (process.env.NODE_ENV === 'development') {
    console.log('running development server...')
} else {
    console.log('running production server...')
}

app.use(express.json());

app.use('/api/v1/user', userRouter);

module.exports = app;