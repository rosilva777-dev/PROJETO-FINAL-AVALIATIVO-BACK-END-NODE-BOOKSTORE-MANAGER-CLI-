import { ICliente } from "./ICliente";
export class Cliente implements ICliente {
    constructor(
        public id: number | undefined,
        public nome: string,
        public email: string,
        public telefone: string

    ) {}
}