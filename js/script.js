const galeria = document.getElementById("galeria");

galeria.innerHTML = "";

for (const pessoa of pessoas) {

    galeria.innerHTML += `
        <div class="cartao">

            <img
                src="imagens/${pessoa.foto}"
                alt="${pessoa.nome}"
                title="${pessoa.nome}">

            <h3>${pessoa.nome}</h3>

        </div>
    `;

}
