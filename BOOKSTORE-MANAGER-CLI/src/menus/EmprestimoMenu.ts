import promptSync from "prompt-sync";
import { EmprestimoController } from "../controllers/EmprestimoController";

const prompt = promptSync();

export class MenuEmprestimos {

    private controller = new EmprestimoController();

    async abrir() {

        let op = -1;

        while (op != 0) {

            console.clear();

            console.log("===== EMPRÉSTIMOS =====");

            console.log("1 - Realizar empréstimo");
            console.log("2 - Registrar devolução");
            console.log("0 - Voltar");

            op = Number(prompt("Escolha: "));

            switch (op) {

                case 1:
                    await this.controller.emprestar();
                    break;

                case 2:
                    await this.controller.devolver();
                    break;

            }

            if (op != 0)
                prompt("\nENTER...");
        }

    }

}