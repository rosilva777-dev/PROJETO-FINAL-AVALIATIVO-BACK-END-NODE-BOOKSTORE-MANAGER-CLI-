import promptSync from "prompt-sync";
import { Cliente } from "../models/Cliente";
import { ClienteService } from "../services/ClienteService";

const prompt = promptSync();

export class ClienteController {

    private service = new ClienteService();

    async cadastrar() {

        console.clear();

        console.log("=== NOVO CLIENTE ===");

        const nome = prompt("Nome: ");

        const email = prompt("Email: ");

        const telefone = prompt("Telefone: ");

        try {

            await this.service.cadastrar(

                new Cliente(

                    undefined,

                    nome,

                    email,

                    telefone

                )

            );

            console.log("Cliente cadastrado.");

        } catch (erro: any) {

            console.log(erro.message);

        }

    }

    async listar() {

        const clientes = await this.service.listar();

        clientes.forEach(c => {

            console.log(`${c.id} - ${c.nome}`);

            console.log(c.email);

            console.log("-------------------");

        });

    }

}