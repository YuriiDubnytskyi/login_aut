const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Schema = mongoose.Schema;
const Book = new Schema({
    bookName: String,
    bookText: String
},{
    collection: 'usersSite'
});

mongoose.connect('mongodb+srv://yurii:dataUser@clusterproject-ftmhi.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true}).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});
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

app.get("/books",(req,res)=>{
    Book.find({}, function(err, users){
        if(err) return console.log(err);
        console.log(users);
        res.send(users);
        console.log(users);
    });
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
