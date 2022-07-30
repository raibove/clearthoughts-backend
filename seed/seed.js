import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import {createUserSQL, createQuestionSQL} from "./sql.js"
dotenv.config();


const connection = await mysql.createConnection(process.env.DATABASE_URL);

const createTable = async ()=>{
    try{
        await connection.query(createUserSQL);
        console.log('***created user Table***');

        await connection.query(createQuestionSQL);
        console.log('***created question Table***');
    }catch(err){
		console.error(err);
    }
}

await createTable();
process.exit(0);