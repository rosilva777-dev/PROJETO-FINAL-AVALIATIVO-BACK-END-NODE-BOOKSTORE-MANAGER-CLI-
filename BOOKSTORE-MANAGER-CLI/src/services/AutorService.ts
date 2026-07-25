import { Autor } from "../models/Autor";
import { AutorRepository } from "../repositories/AutorRepository";

export class AutorService {

    private repository = new AutorRepository();

    async cadastrar(autor: Autor): Promise<void> {

        if (!autor.nome.trim()) {
            throw new Error("O nome do autor é obrigatório.");
        }

        await this.repository.criar(autor);
    }

    async listar(): Promise<Autor[]> {
        return this.repository.listar();
    }

    async buscarPorId(id:number){

        if(id <=0){
            throw new Error("ID inválido.");
        }

        return this.repository.buscarPorId(id);
    }

    async atualizar(autor:Autor){

        if(!autor.id){
            throw new Error("Autor inválido.");
        }

        await this.repository.atualizar(autor);
    }

    async excluir(id:number){

        const autor = await this.repository.buscarPorId(id);

        if(!autor){
            throw new Error("Autor não encontrado.");
        }

        await this.repository.excluir(id);
    }

}