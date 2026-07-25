import { pool } from "../database/connection";
import { Livro } from "../models/Livro";

export class LivroRepository {

    async listarComAutores() {

        const resultado = await pool.query(

        `SELECT

            l.id,

            l.titulo,

            l.isbn,

            l.ano_publicacao,

            l.quantidade,

            a.nome AS autor

        FROM livros l

        INNER JOIN autores a

        ON a.id=l.autor_id

        ORDER BY l.titulo`

        );

        return resultado.rows;
    }
}