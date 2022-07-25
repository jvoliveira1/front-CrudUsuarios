//Interface com todos os campos do DB para no ter erro na hora das acoes do CRUD
export interface IUser{
    userNome:string,
    userCPF:string,
    userEmail:string,
    userTelefone:string,
    selecionado:boolean,
    userId:string,
    userAtivo:boolean,
    userDataCriacao:string
}