import { Cliente } from "../models/Cliente";
import { ClienteRepository } from "../repositories/ClienteRepository";

export class ClienteService {

    private repository = new ClienteRepository();

    async cadastrar(cliente:Cliente){

        if(cliente.nome.length < 3){
            throw new Error("Nome muito curto.");
        }

        if(!cliente.email.includes("@")){
            throw new Error("Email inválido.");
        }

        await this.repository.criar(cliente);
    }

    async listar(){

        return this.repository.listar();
    }

}