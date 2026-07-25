import { MenuPrincipal } from "./menus/MenuPrincipal";

async function main(): Promise<void> {

    console.clear();

    console.log("========================================");
    console.log("      BOOKSTORE MANAGER CLI");
    console.log("========================================");

    const menu = new MenuPrincipal();

    await menu.iniciar();

}

main();

main().catch((erro) => {

    console.error("\nErro inesperado:");

    console.error(erro.message);

});