import promptSync from "prompt-sync";
import { Emprestimo } from "../models/Emprestimo";
import { EmprestimoService } from "../services/EmprestimoService";

const prompt = promptSync();

export class EmprestimoController {

    private service = new EmprestimoService();

    async emprestar() {

        console.clear();

        console.log("=== NOVO EMPRÉSTIMO ===");

        const cliente = Number(prompt("ID Cliente: "));

        const livro = Number(prompt("ID Livro: "));

        try {

            await this.service.emprestar(

                new Emprestimo(

                    undefined,

                    cliente,

                    livro,

                    new Date(),

                    null,

                    false

                )

            );

            console.log("Empréstimo realizado.");

        } catch (erro: any) {

            console.log(erro.message);

        }

    }

    async devolver() {

        const id = Number(

            prompt("ID do empréstimo: ")

        );

        try {

            await this.service.devolver(id);

            console.log("Livro devolvido.");

        } catch (erro: any) {

            console.log(erro.message);

        }

    }

}