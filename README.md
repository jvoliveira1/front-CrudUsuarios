# A APLICAÇÂO

Essa aplicação foi feita em React e gera uma tela com um formulario, uma lista e 2 botoes.

## O FORMULÁRIO

O formulario recebe as informaçoes Nome, CPF, Email e Telefone por input, que sao required e ao clicar no titulo de cada campo o input respectivo eh 
focado, e ao clicar no botao "Adicionar" no final do formulario, gera-se um objeto Usuario que possui:
- Nome : nome do usuario;
- Cpf: cpf do usuario que deve ser no formato xxx.xxx.xxx-xx (e que eh uma chave unica e eh tratado no back end para nao ser possivel ter 2 iguais salvo no DB);
- Email: email do usuario;
- Telefone: telefone do ususario;
- Id: gerado pelo DB de forma unica e que serve nesse programa como chave de identificacao;
- Selecionado: boleano de identificacao para item selecionado para se comunicar qual usuario esta sendo tratado no momento;
- Ativo: se o usuario eh um usuario ativo (todos recebem false pois esse dado so eh usado pelo back end)
- DataDeCraicao: data que o usuario foi criado (so eh utilizado no Back end;

### BOTÂO DO FORMULÁRIO

Ao clicar no botao "Adicionar", esse objeto eh gerado e mandado para o back end para ser salvo no DB e passado pra lista atraves do DB.
O botao "Adicionar" pode virar "Update" quando um usuario esta selecionado, desta forma os dados salvos no DB desse ususario especifico volta para os 
inputs do formulario para serem tratados novamente e quando se clica no botao "Update" os dados alterados sao enviado para o DB para serem alterado no 
DB e respectivamente na lista;

#### Lista

A lista recebe todos os usuario do DB e traz pra tela de forma onde possa selecionar cada um deles apenas clicando no usuario desejado, mudando de cor
o usuario que foi selecionado para dar um feedback visual.
Ao selecionar esse usuario muda tambem o botar do formulario de "Adicionar" para "Update" e os dados salvos no DB desse ususario especifico volta para os 
inputs do formulario para serem tratados novamente e quando se clica no botao "Update" os dados alterados sao enviado para o DB para serem alterado no 
DB e respectivamente na lista;

#### BOTÂO "DELETE"

<<<<<<< HEAD
Ao clicar no "Delete" o usuario selecionado na lista eh excluido permanentemente do DB e removido da Lista;
=======
Ao clicar no "Delete" o usuario selecionado na lista eh excluido permanentemente do DB e removido da Lista
>>>>>>> 476ff5b6ccfb81a45202186ef9457f925e1d8a43
