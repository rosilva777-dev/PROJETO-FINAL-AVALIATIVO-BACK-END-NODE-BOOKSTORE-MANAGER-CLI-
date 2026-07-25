import { IAutor } from "./IAutor";

export class Autor implements IAutor {

    constructor(
        public id: number | undefined,
        public nome: string,
        public nacionalidade: string,
        public dataNascimento: Date
    ) {}
}

