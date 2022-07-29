import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import {createUserSQL} from "./sql.js"
dotenv.config();


const connection = await mysql.createConnection(process.env.DATABASE_URL);

const createTable = async ()=>{
    try{
        await connection.query(createUserSQL);
        console.log('***created user Table***');
    }catch(err){
		console.error(err);
    }
}

await createTable();
process.exit(0);