import express from 'express'
import mongoose from 'mongoose'

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:t20loZYbbtMM3xND@blogs.i2qsr.mongodb.net/blogs?retryWrites=true&w=majority` 
//Middlewares
//DB config
//API endpoint
app.get('/', (req, res) => res.status(200).send('hello world'))
//Listener
app.listen(port, () => console.log(`listening on localhost ${port}`))