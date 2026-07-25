export interface IEmprestimo {
    id?: number;
    clienteId: number;
    livroId: number;
    dataEmprestimo: Date;
    dataDevolucao: Date | null;
    devolvido: boolean;
}