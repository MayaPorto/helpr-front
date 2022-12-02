export interface Cliente { //o que o cliente tem?
    id?: number; // ? diz que não é obrigatório
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    perfil?: string;
    senha?: string;
}
