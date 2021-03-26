const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const uri = "mongodb+srv://arabian:ArabianHorse88@cluster0.8raz4.mongodb.net/burjAlArab?retryWrites=true&w=majority";
const port = 5000;

const pas = "ArabianHorse76"

const app = express();
app.use(cors());
app.use(bodyParser.json());  //req er body ke json e convert korar jnno




const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const bookings = client.db("burjAlArab").collection("bookings");
  // perform actions on the collection object
   //console.log('db connected successfully!!')
    app.post('/addBooking',(req, res) => {
      const newBooking = req.body;  //cors needed
      bookings.insertOne(newBooking)
      .then(result => {
        console.log(result)
      })
      
      console.log(newBooking)
    })
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})