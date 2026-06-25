import { db } from "../db/initDb.js";


export const loginApplicant = async (req,res) => {

    try {
        const {email, password} = req.body;
    
        const hashedPassword = await bcrypt.hash(password,10)
    
        const isMatch = await bcrypt.compare(
            password,user.password)
    
        if(email){
            return res.status(400).json({error:'Wrong email or password'})
        }
    
        if(!isMatch){
            return res.status(400).json({error:'Wrong email or password'})
        }
    
        const result = await db.query(`
                SELECT FROM users WHERE email = ? AND password =?`,[email,isMatch])
    
        const user = result.rows(0)
} catch(error) {

    res.status(500).json({error:' Server is down, try again later'})
}


}
