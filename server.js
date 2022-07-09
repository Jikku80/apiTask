const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const app = require('./app');

url = process.env.DATABASE_LOCAL;

mongoose.Promise = global.Promise;

mongoose.connect(url, { useNewUrlParser: true }).then(() => console.log("DB Connection Successful!"))
    .catch(err => {
        console.log("Could not connect to the database", err);
        process.exit();
    })

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Your Application is running in port ${port}...`);
})