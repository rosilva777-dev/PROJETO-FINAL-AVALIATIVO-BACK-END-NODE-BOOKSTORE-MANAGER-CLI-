import promptSync from "prompt-sync";
import { LivroController } from "../controllers/LivroController";

const prompt = promptSync();

export class MenuLivros {

    private controller = new LivroController();

    async abrir() {

        let op = -1;

        while (op != 0) {

            console.clear();

            console.log("===== LIVROS =====");

            console.log("1 - Cadastrar");
            console.log("2 - Listar");
            console.log("0 - Voltar");

            op = Number(prompt("Escolha: "));

            switch (op) {

                case 1:
                    await this.controller.cadastrar();
                    break;

                case 2:
                    await this.controller.listar();
                    break;

            }

            if (op != 0)
                prompt("\nENTER...");
        }

    }

}