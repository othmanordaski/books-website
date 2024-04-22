const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bookRouter = require('./routes/booksRouter');
const userRouter = require('./routes/userRouter');
const { connection } = require('./config/connectDB');
connection().connectToMongo();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/book', bookRouter);
app.use('/user',userRouter)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});