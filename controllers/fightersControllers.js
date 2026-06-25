import { db } from "../db/initDb.js";

export const retrieveFighter= async (req,res) => {
    const {belt} = req.query

    let query = `SELECT * FROM users `;
    let params = [];

    if(belt) {
        query += 'WHERE belt = $1'
    }
    params.push(belt)
const results = await db.query(query,params)


    res.json({results})
    

}