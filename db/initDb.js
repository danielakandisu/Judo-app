import {PGlite } from '@electric-sql/pglite';
export const db = new  PGlite();

export async function initDB(){
    await db.exec(`
        
        CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT,
        belt TEXT,
        email TEXT,
        password TEXT
        
        )
         `)}
