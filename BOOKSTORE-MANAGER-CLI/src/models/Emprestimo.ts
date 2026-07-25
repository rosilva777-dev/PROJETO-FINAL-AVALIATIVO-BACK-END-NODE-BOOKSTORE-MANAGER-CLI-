import { IEmprestimo } from "./IEmprestimo";

export class Emprestimo implements IEmprestimo {
    constructor(
        public id: number | undefined,
        public clienteId: number,
        public livroId: number,
        public dataEmprestimo: Date,
        public dataDevolucao: Date | null,
        public devolvido: boolean

    ) {}
}