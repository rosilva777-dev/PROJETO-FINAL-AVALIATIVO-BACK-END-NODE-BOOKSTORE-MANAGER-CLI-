import promptSync from "prompt-sync";
import { Autor } from "../models/Autor";
import { AutorService } from "../services/AutorService";

const prompt = promptSync();

export class AutorController {

    private service = new AutorService();

    async cadastrar(): Promise<void> {

        console.clear();
        console.log("=== CADASTRAR AUTOR ===");

        const nome = prompt("Nome: ");
        const nacionalidade = prompt("Nacionalidade: ");
        const data = prompt("Data de nascimento (AAAA-MM-DD): ");

        try {

            const autor = new Autor(
                undefined,
                nome,
                nacionalidade,
                new Date(data)
            );

            await this.service.cadastrar(autor);

            console.log("\nAutor cadastrado com sucesso.");

        } catch (erro: any) {

            console.log("\nErro:", erro.message);
        }
    }

    async listar(): Promise<void> {

        console.clear();

        console.log("=== AUTORES ===\n");

        const autores = await this.service.listar();

        if (autores.length === 0) {
            console.log("Nenhum autor cadastrado.");
            return;
        }

        autores.forEach(a => {

            console.log(`${a.id} - ${a.nome}`);

            console.log(`Nacionalidade: ${a.nacionalidade}`);

            console.log("---------------------------");

        });
    }

    async excluir(): Promise<void> {

        const id = Number(prompt("ID do autor: "));

        try {

            await this.service.excluir(id);

            console.log("Autor removido.");

        } catch (erro: any) {

            console.log(erro.message);

        }

    }

}