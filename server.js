require('dotenv').config();

const bodyParser = require("body-parser");
const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.listen(3000, () => console.log("server started"));

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true });

const db = mongoose.connection

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected To Mongodb Database'));

app.use(express.json());

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

const userss  = require('./routes/login');
app.use('/userss', userss );

