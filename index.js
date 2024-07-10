const express = require('express');
const cors = require('cors');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const ApiError = require('./Error');
const sequelize = require('./DB/db');
const router = require('./Router');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('', router);


app.use(errorHandlerMiddleware)

async function start() {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    }
    catch (e) {
        console.log(e);
    }
}

start();
