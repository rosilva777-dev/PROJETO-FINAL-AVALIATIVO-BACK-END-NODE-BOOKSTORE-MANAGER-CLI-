import promptSync from "prompt-sync";
import { AutorController } from "../controllers/AutorController";

const prompt = promptSync();

export class MenuAutores {

    private controller = new AutorController();

    async abrir() {

        let op = -1;

        while (op != 0) {

            console.clear();

            console.log("===== AUTORES =====");

            console.log("1 - Cadastrar");
            console.log("2 - Listar");
            console.log("3 - Excluir");
            console.log("0 - Voltar");

            op = Number(prompt("\nEscolha: "));

            switch (op) {

                case 1:
                    await this.controller.cadastrar();
                    break;

                case 2:
                    await this.controller.listar();
                    break;

                case 3:
                    await this.controller.excluir();
                    break;
            }

            if (op != 0)
                prompt("\nENTER...");
        }

    }

}