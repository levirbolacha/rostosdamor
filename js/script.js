const galeria = document.getElementById("galeria");

const modal = document.getElementById("modal");
const modalFoto = document.getElementById("modal-foto");
const modalNome = document.getElementById("modal-nome");
const fechar = document.getElementById("fechar");

galeria.innerHTML = "";

for (const pessoa of pessoas) {

    galeria.innerHTML += `
        <div class="cartao">

            <img
                src="imagens/${pessoa.foto}"
                alt="${pessoa.nome}"
                data-foto="${pessoa.foto}"
                data-nome="${pessoa.nome}">

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
