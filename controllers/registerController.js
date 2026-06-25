
import validator from 'validator';
import { db } from '../db/initDb.js';
import bcrypt from 'bcryptjs';


export const registerApplicants = async(req,res) => {
    try {

        const {email, password, belt, username} = req.body;
    
        let query = 'SELECT * FROM users' 
        let params = []
        
        if(!validator.isEmail(email)) {
            
            return res.status(400).json({error:'Please enter a valid email'})
        }
        if(password.length < 6){
            return res.status(400).json({error:'Invlaid password, must be at least 6 characters'})
        }
          if(!/^[a-zA-Z0-9_]+$/.test(username) || username.length < 8){
        return res.status(400).json({error:' Please add a valid password '})
      }
        if(!belt) {
           return  res.status(400).json({error:'Enter your belt please'})
     }
        const hashing = await bcrypt.hash(password,10)
            
          await db.query(
            'INSERT INTO users(username,belt,email,password) VALUES ($1,$2,$3,$4)',
            [username,belt,email,hashing])  
    
            return res.status(201).json({
                message:'User registered successfully',
                user:{username}
            })
    }

    catch(error) {
    
        res.status(500).json({error: 'Server is down'})
    }
}