const botaoAlterarTema = document.getElementById
("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.
querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    body.classList.add("modo-escuro");
    const modoEscuroEstaAtivo = body.classList.
contains("modo-escuro")

    body.classList.toggle("mogo-escuro");

    if(modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});

