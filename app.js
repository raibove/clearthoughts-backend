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

app.listen(process.env.PORT || 5001, () =>{
    console.log('App is running');
});