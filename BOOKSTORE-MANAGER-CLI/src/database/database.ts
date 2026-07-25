import { pool } from "./Connection";

export class Database {

    private static instance: Database;

    private constructor(){}
    
    public static getInstance(): Database{

        if(!Database.instance){

            Database.instance = new Database();
        }

        return Database.instance;
    }

    async connect(): Promise<void>{

        try{

            const client = await pool.connect();

            console.log("=================================");
            console.log("Conectado ao PostgreSQL");
            console.log("=================================");

            client.release();

        }catch(error){

            console.error("Erro ao conectar ao banco.");
            console.error(error);
            process.exit(1);

        }

    }

    async query(sql:string, params:any[]=[]){

        return pool.query(sql,params);

    }

}