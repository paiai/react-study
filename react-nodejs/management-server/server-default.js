const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/api/hello', (req, res) => {
//     res.send({message: 'Hello Express!'});
// }) 

app.get('/api/test', (req, res) => {
  res.send([
    "Italy",
    "Korea",
    "Japan",
    "Spain"
    ])
})

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id':1,
          'image':'https://placeimg.com/64/64/1',
          'name':'name1',
          'birthday':'birthday1',
          'gender':'gender1',
          'job':'job1'
        },
        {
          'id':2,
          'image':'https://placeimg.com/64/64/2',
          'name':'name2',
          'birthday':'birthday2',
          'gender':'gender2',
          'job':'job2'
        },
        {
          'id':3,
          'image':'https://placeimg.com/64/64/3',
          'name':'name3',
          'birthday':'birthday3',
          'gender':'gender3',
          'job':'job3'
        }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));