import express from 'express'
import mongoose from 'mongoose'  
import cards from './dbCards.js'
import Cors from 'cors'

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:V5MV3uops3se3Odd@cluster0.i2qsr.mongodb.net/blogs?retryWrites=true&w=majority`;

//middlewares
app.use(express.json()); 
app.use(Cors());
//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World'));
app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;
    cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});
app.get('/tinder/card', (req, res) =>{
    cards.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})
// listener
app.listen(port, () => console.log(`listening on localhost ${port}`));