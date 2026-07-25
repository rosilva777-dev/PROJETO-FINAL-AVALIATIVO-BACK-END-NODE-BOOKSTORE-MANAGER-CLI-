import { pool } from './config/db';

async function main(){
    const result = await pool.query('SELECT NOW()');
    console.log(result.rows[0]);
    pool.end()
}

main();
