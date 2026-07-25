import { Database } from "./database/Database";

async function testar(){

    const db = Database.getInstance();

    await db.connect();

    const resultado = await db.query("SELECT NOW()");

    console.log(resultado.rows);

}

testar();