import { pool } from "../database/connection";
import { Cliente } from "../models/Cliente";

export class ClienteRepository {

    async listar(): Promise<Cliente[]> {

        const resultado =
            await pool.query(
                "SELECT * FROM clientes ORDER BY nome"
            );

        return resultado.rows.map(row =>
            new Cliente(
                row.id,
                row.nome,
                row.email,
                row.telefone
            )
        );
    }
}