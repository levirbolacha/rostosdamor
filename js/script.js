const galeria = document.getElementById("galeria");

const modal = document.getElementById("modal");
const modalFoto = document.getElementById("modal-foto");
const modalNome = document.getElementById("modal-nome");
const modalNascimento = document.getElementById("modal-nascimento");
const modalFalecimento = document.getElementById("modal-falecimento");
const modalProfissao = document.getElementById("modal-profissao");
const fechar = document.getElementById("fechar");

galeria.innerHTML = "";

for (const pessoa of pessoas) {

    galeria.innerHTML += `
        <div class="cartao">

            <img
                src="imagens/${pessoa.foto}"
                alt="${pessoa.nome}"
                data-foto="${pessoa.foto}"
                data-nome="${pessoa.nome}"
data-nascimento="${pessoa.nascimento}"
data-falecimento="${pessoa.falecimento}"
data-profissao="${pessoa.profissao}">

            <h3>${pessoa.nome}</h3>

        </div>
    `;

}

const imagens = document.querySelectorAll(".cartao img");

imagens.forEach(imagem => {

    imagem.addEventListener("click", function(){

        modal.style.display = "flex";
        modalFoto.src = "imagens/" + this.dataset.foto;
modalNome.textContent = this.dataset.nome;

modalNascimento.textContent =
    this.dataset.nascimento ?
    "Nascimento: " + this.dataset.nascimento : "";

modalFalecimento.textContent =
    this.dataset.falecimento ?
    "Falecimento: " + this.dataset.falecimento : "";

modalProfissao.textContent =
    this.dataset.profissao ?
    "Profissão: " + this.dataset.profissao : "";

    });

});

fechar.addEventListener("click", function(){

    modal.style.display = "none";

});

modal.addEventListener("click", function(event){

    if(event.target === modal){

        modal.style.display = "none";

    }

});
