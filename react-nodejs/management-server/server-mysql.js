const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

const multer = require('multer'); // post 전송 처리
const upload = multer({dest: './upload'})

app.get('/api/customers', (req, res) => {
    //res.send();
    connection.query(
        "SELECT * FROM CUSTOMERS WHERE isDeleted = 0",
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.use('/image', express.static('./upload')); // image - 업로드 폴더와 매핑?

app.post('/api/customers', upload.single('image'), (req, res) => { // 클라이언트에서 image 라는 변수로 이미지 데이터를 보냄
    let sql = 'INSERT INTO CUSTOMERS VALUES (null, ?, ?, ?, ?, ?, now(), 0)';
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [image, name, birthday, gender, job];
    console.log(params)
    connection.query(sql, params, (err, rows, fields) => {
        res.send(rows);
    })
})

app.delete('/api/customers/:id', (req, res) => {
    let sql = 'UPDATE CUSTOMERS SET isDeleted = 1 WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params, 
        (err, rows, fields) => {
            res.send(rows);
        })
})

app.listen(port, () => console.log(`Listening on port ${port}`));



// app.get('/api/hello', (req, res) => {
//     res.send({message: 'Hello Express!'});
// }) 

// app.get('/api/customers', (req, res) => {
//     res.send([
//         {
//           'id':1,
//           'image':'https://placeimg.com/64/64/1',
//           'name':'name1',
//           'birthday':'birthday1',
//           'gender':'gender1',
//           'job':'job1'
//         },
//         {
//           'id':2,
//           'image':'https://placeimg.com/64/64/2',
//           'name':'name2',
//           'birthday':'birthday2',
//           'gender':'gender2',
//           'job':'job2'
//         },
//         {
//           'id':3,
//           'image':'https://placeimg.com/64/64/3',
//           'name':'name3',
//           'birthday':'birthday3',
//           'gender':'gender3',
//           'job':'job3'
//         }
//     ])
// })