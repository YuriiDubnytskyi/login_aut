const express = require('express');
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const Schema = mongoose.Schema;
// const Book = new Schema({
//     bookName: String,
//     bookText: String
// },{
//     collection: 'usersSite'
// });
//
// mongoose.connect('mongodb+srv://yurii:dataUser@clusterproject-ftmhi.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true}).then(
//     () => {console.log('Database is connected') },
//     err => { console.log('Can not connect to the database' +err)
// });
const uri = "mongodb+srv://yurii:dataUser@clusterproject-ftmhi.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let cors = require('cors');

app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
const jsonParser = express.json();

app.get("/book",(req,res)=>{
    client.connect(err => {
        const collection = client.db("usersData").collection("usersSite");
        collection.find({}).toArray((err,books)=>{
            if (err) return console.log(err);
            console.log(books);
            res.send(books)
        });
        client.close();
    });
});




const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
