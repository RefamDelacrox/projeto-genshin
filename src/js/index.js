// 1 - Ao clicar na naçao, mudar a tela de fundo para aquela naçao
// 1.1 - Monstrar somente personagens daquela nação
// 2 - Ao clicar no simbolo do elemento mostrar somente personagens daquele elemento
// 2.1 - Ao clicar no nome do elemento, na caixa do personagem, mostrar somente personagem daquele elemento
// 2.2 - Ao selecionar um elemento, mostrar no topo da pagina somente o elemento escolhido
// 3 - Ao clicar na arma mostrará somente personagens que usam aquele tipo de arma
// 4 - Ao clicar no personagens, mostrar mais detalhes sobre aquele personagem
// 5 - Ao clicar na paimon irá voltar a pagina inicial

const botaoAlterarTema = document.getElementById("botao-alterar-fundo-sumero");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".sumero");

botaoAlterarTema.addEventListener("click", () => {
    const modoMondstadtEstaAtivo = body.classList.contains("modo-sumero");
    body.classList.toggle("modo-sumero");


});



