import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import mysql from 'mysql2/promise';

dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) =>{
  res.json({msg: 'Hello World'});
});

app.post('/user', async (req, res) => {
  try{
    let resp = await connection.query('INSERT INTO user (name) VALUES (?)',[req.body.name])
    res.send({
      name: req.body.name,
      id: resp[0].insertId
    })
  }catch(err){
    res.status(409)
    res.send(err)
  }
})

app.post('/question', async (req,res) => {
  try{
    let data = [req.body.title, req.body.description]
    let response = await connection.query('INSERT INTO question (title, description) VALUES (?)', [data])
    res.send({id: response[0].insertId})
  }catch(err){
    res.status(400)
    res.send(err)
  }
})

app.get('/question', async (req,res) => {
  try{
    let response = await connection.query('Select * from question')
    res.send(response[0])
  }catch(err){
    res.status(400)
    res.send(err)
  }
})

app.post('/answer', async (req, res) => {
  try{
    let userId = req.body.userId
    let version = 1
    let getCurrentVersion = await connection.query('SELECT version from answer where userId = (?)', [userId]);
  
    if(getCurrentVersion[0].length!=0){
      let latestVersion = getCurrentVersion[0].length
      version = getCurrentVersion[0][latestVersion-1].version+1
    }
   
    let data = [userId, req.body.answer1, req.body.answer2, req.body.answer3, req.body.answer4, req.body.answer5, req.body.answer6, version]
    let response = await connection.query('INSERT INTO answer (userId, answer1, answer2, answer3, answer4, answer5, answer6, version) VALUES (?)', [data])
    res.send(response[0])
  
  }catch(err){
    res.status(400)
    res.send(err)
  }
})

app.get('/answer', async (req, res) => {
  try{

    let userId = req.body.userId
    let response = await connection.query('SELECT * from answer WHERE userId = (?)',[userId])
    res.send(response[0])

  }catch(err){
    res.status(400)
    res.send(err)
  }
})

app.listen(process.env.PORT || 5001, () =>{
    console.log('App is running');
});