import { ILivro } from "./ILivro";

export class Livro implements ILivro {

    constructor(

        public id: number | undefined,

        public titulo: string,

        public isbn: string,

        public anoPublicacao: number,

        public quantidade: number,

        public autorId: number

    ) {}
}