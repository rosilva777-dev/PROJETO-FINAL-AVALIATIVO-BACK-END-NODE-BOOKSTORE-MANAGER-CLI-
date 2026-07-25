import { pool } from "../database/connection";
import { Autor } from "../models/Autor";
import { IAutorRepository } from "./IAutorRepository";

export class AutorRepository implements IAutorRepository {

    async criar(autor: Autor): Promise<void> {

        await pool.query(
            `INSERT INTO autores
            (nome,nacionalidade,data_nascimento)
            VALUES ($1,$2,$3)`,
            [
                autor.nome,
                autor.nacionalidade,
                autor.dataNascimento
            ]
        );
    }

    async listar(): Promise<Autor[]> {

        const resultado = await pool.query(
            "SELECT * FROM autores ORDER BY nome"
        );

        return resultado.rows.map(row =>
            new Autor(
                row.id,
                row.nome,
                row.nacionalidade,
                row.data_nascimento
            )
        );
    }

    async buscarPorId(id: number): Promise<Autor | null> {

        const resultado = await pool.query(
            "SELECT * FROM autores WHERE id=$1",
            [id]
        );

        if (resultado.rows.length === 0)
            return null;

        const row = resultado.rows[0];

        return new Autor(
            row.id,
            row.nome,
            row.nacionalidade,
            row.data_nascimento
        );
    }

    async atualizar(autor: Autor): Promise<void> {
        await pool.query(
        `UPDATE autores
        SET nome=$1,
        nacionalidade=$2,
        data_nascimento=$3
        WHERE id=$4`,
            [
                autor.nome,
                autor.nacionalidade,
                autor.dataNascimento,
                autor.id
            ]
        );
    }

    async excluir(id: number): Promise<void> {
        await pool.query(
            "DELETE FROM autores WHERE id=$1",
            [id]
        );
    }
}