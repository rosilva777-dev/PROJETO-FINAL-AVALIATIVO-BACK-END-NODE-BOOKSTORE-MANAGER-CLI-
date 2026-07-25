import { pool } from "../database/connection";

export class EmprestimoRepository {

    async listarEmprestimos() {

        const resultado = await pool.query(

        `SELECT

            e.id,

            c.nome AS cliente,

            l.titulo AS livro,

            e.data_emprestimo,

            e.data_devolucao,

            e.devolvido

        FROM emprestimos e

        INNER JOIN clientes c

            ON c.id=e.cliente_id

        INNER JOIN livros l

            ON l.id=e.livro_id

        ORDER BY e.data_emprestimo DESC`

        );

        return resultado.rows;
    }

}