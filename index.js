const express = require('express');
const cors = require('cors');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const ApiError = require('./Error');
const sequelize = require('./DB/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {

    const {a, b} = req.query;

    console.log(a, b)
    res.json({
        ...req.query
    });
})


app.get('/user/:userId', (req, res) => {
    const {userId} = req.params;

    return res.json({userId});
})

app.get('/user/asd', (req, res) => {

    return res.json({});
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        asd: 'asd'
    });
})

app.post('/multiplication', (req, res) => {
    const {a, b} = req.body;
    return res.json({
        answer: a*b,
    });
})

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
