import { Emprestimo } from "../models/Emprestimo";
import { EmprestimoRepository } from "../repositories/EmprestimoRepository";
import { LivroRepository } from "../repositories/LivroRepository";

export class EmprestimoService {

    private emprestimoRepository = new EmprestimoRepository();

    private livroRepository = new LivroRepository();

    async emprestar(emprestimo:Emprestimo){

        const livro =
            await this.livroRepository.buscarPorId(
                emprestimo.livroId
            );

        if(!livro){
            throw new Error("Livro inexistente.");
        }

        if(livro.quantidade <=0){
            throw new Error("Livro indisponível.");
        }

        livro.quantidade--;

        await this.livroRepository.atualizar(livro);

        await this.emprestimoRepository.criar(
            emprestimo
        );
    }

}