import { Livro } from "../models/Livro";
import { LivroRepository } from "../repositories/LivroRepository";

export class LivroService {

    private repository = new LivroRepository();

    async cadastrar(livro:Livro){

        if(!livro.titulo.trim()){
            throw new Error("Título obrigatório.");
        }

        if(livro.quantidade < 0){
            throw new Error("Quantidade inválida.");
        }

        await this.repository.criar(livro);
    }

    async listar(){

        return this.repository.listar();
    }

    async atualizar(livro:Livro){

        if(!livro.id){
            throw new Error("Livro inválido.");
        }

        await this.repository.atualizar(livro);
    }

}