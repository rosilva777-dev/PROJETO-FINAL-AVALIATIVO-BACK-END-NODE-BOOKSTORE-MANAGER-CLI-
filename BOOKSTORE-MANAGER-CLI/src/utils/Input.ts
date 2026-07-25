import promptSync from "prompt-sync";

const prompt = promptSync();

export class Input {

    static texto(mensagem: string): string {
        return prompt(mensagem);
    }

    static numero(mensagem: string): number {
        return Number(prompt(mensagem));
    }

    static pausar(): void {
        prompt("\nPressione ENTER para continuar...");
    }

}

const nome = Input.texto("Nome: ");

const idade = Input.numero("Idade: ");