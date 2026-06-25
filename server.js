import express from 'express';
import cors from 'cors'
import validator from 'validator';
import bcrypt from 'bcryptjs';
import session from 'express-session';
import 'dotenv/config';
import { initDB } from './db/initDb.js';
import { db } from './db/initDb.js';
import { registerApplicants } from './controllers/registerController.js';
import { loginApplicant } from './controllers/loginController.js';


const app = express();
const PORT = 3000;
const secret = process.env.SESSION_SECRET || 'dare10devilspider52man'

app.use(cors())
app.use(express.json())
app.use(session({
    secret:secret,
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge: 1000*60*60*7,
        httpOnly: true,
        secure:false,
        sameSite: 'strict'
    }
}));

app.post('/register',registerApplicants)
app.get('/login',loginApplicant)

initDB().then(()=> {

    app.listen(3000, () => { console.log('Server is running')})
})

