const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(cors());
const uri = "mongodb+srv://bdUser:yV8BD4MNsjXmI1Q6@cluster0-39pyc.mongodb.net/test?retryWrites=true&w=majority";

const user = 'bdUser';
const pass ='yV8BD4MNsjXmI1Q6';
let client = new MongoClient(uri, { useNewUrlParser: true });
app.get('/addProduct', function (req, res) {
  const product = req.body;
  console.log(product);
  client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("onlineStore").collection("products");
    collection.insertOne(product,(err,result)=>
    {
        if(res){
          console.log(result);
        }
        else {
          console.log(err);
        }
        res.send(product);
    })
  
    client.close();
  });
})

app.get('/', function (req, res) {
  res.send('hello Bangladesh')
})
app.listen(3000)
