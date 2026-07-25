import promptSync from "prompt-sync";
import { Livro } from "../models/Livro";
import { LivroService } from "../services/LivroService";

const prompt = promptSync();

export class LivroController {

    private service = new LivroService();

    async cadastrar(): Promise<void> {

        console.clear();

        console.log("=== CADASTRAR LIVRO ===");

        const titulo = prompt("Título: ");

        const isbn = prompt("ISBN: ");

        const ano = Number(prompt("Ano: "));

        const quantidade = Number(prompt("Quantidade: "));

        const autor = Number(prompt("ID Autor: "));

        try {

            const livro = new Livro(
                undefined,
                titulo,
                isbn,
                ano,
                quantidade,
                autor
            );

            await this.service.cadastrar(livro);

            console.log("Livro cadastrado.");

        } catch (erro: any) {

            console.log(erro.message);

        }

    }

    async listar() {

        const livros = await this.service.listar();

        console.clear();

        console.log("=== LIVROS ===");

        livros.forEach(l => {

            console.log(`${l.id} - ${l.titulo}`);

            console.log(`ISBN: ${l.isbn}`);

            console.log(`Quantidade: ${l.quantidade}`);

            console.log("----------------------");

        });

    }

}