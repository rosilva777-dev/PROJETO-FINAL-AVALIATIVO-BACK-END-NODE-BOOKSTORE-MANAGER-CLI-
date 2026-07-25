import promptSync from "prompt-sync";

const prompt = promptSync();

export class MenuPrincipal {

    async iniciar() {

        let opcao = "";

        while (opcao !== "0") {

            console.clear();

            console.log("====================================");
            console.log(" BOOKSTORE MANAGER CLI");
            console.log("====================================");

            console.log("1 - Autores");
            console.log("2 - Livros");
            console.log("3 - Clientes");
            console.log("4 - Empréstimos");
            console.log("0 - Sair");

            opcao = prompt("Escolha: ");

            switch (opcao) {
                case "1":
                    console.log("Menu Autor");
                    break;

                case "2":
                    console.log("Menu Livro");
                    break;

                case "3":
                    console.log("Menu Cliente");
                    break;

                case "4":
                    console.log("Menu Empréstimo");
                    break;

                case "0":
                    console.log("Encerrando...");
                    break;

                default:
                    console.log("Opção inválida.");
            }

            if (opcao !== "0") {
                prompt("\nPressione ENTER...");
            }
        }
    }
}