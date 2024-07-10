const express = require('express');
const cors = require('cors');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
const ApiError = require('./Error');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    return next(ApiError.badRequest('asd'));
    res.json({
        asd: 'asd'
    });
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        asd: 'asd'
    });
})

app.use(errorHandlerMiddleware)

async function start() {
    try{
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    }
    catch (e) {
        console.log(e);
    }
}

start();
