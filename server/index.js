const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const app = express();
const PORT = 8080;
// mongoose.set('strictQuery', true);

app.use(express.json())

app.get('/comments', (req,res) => {
   mysqlConnection.query("SELECT * FROM comments", function (err, data, fields) {
   res.status(200).json({
     status: "success",
     length: data?.length,
     data: data,
   });
 });
    
})

app.post('/comment', (req, res) => {
    const dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    mysqlConnection.query(`INSERT INTO comments(comment,user_id,created_date_time) values("${req.body.comment}","${req.body.userId}","${dateTime}")`, function (err, data, fields) {
   res.status(200).json({
     status: "success",
   });
 });
})

app.post('/reply/:id', (req,res) => {
    const dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    mysqlConnection.query(`INSERT INTO replies(reply,user_id,comment_id,created_date_time) values("${req.body.comment}","${req.body.userId}","${req.body.commentId}","${dateTime}")`, function (err, data, fields) {
   res.status(200).json({
     status: "success",
   });
 });
})

app.post('/upvote/:id', (req, res) => {
  console.log(req.body);
    mysqlConnection.query(`UPDATE comments SET upvotes = "${req.body.upvote}" WHERE id = "${req.body.id}"`, function (err, data, fields) {
    res.status(200).json({
      status: "success",
    });
 });
})

//MySQL details
var mysqlConnection = mysql.createConnection({
host: 'sql12.freesqldatabase.com',
user: 'sql12596735',
password: 'uDfhX943pq',
database: 'sql12596735',
multipleStatements: true
});

mysqlConnection.connect((err)=> {
if(!err)
console.log('Connection Established Successfully');
else
console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
});

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

// app.listen(PORT, () => {
//   console.log("Server is running at port 3000");
// });

// app.listen(PORT,() => console.log("It's alive"))