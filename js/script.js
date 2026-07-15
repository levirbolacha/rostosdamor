const galeria = document.getElementById("galeria");

galeria.innerHTML = "";

for (const pessoa of pessoas) {

    galeria.innerHTML += `
        <img
            src="imagens/${pessoa.foto}"
            alt="${pessoa.nome}"
            title="${pessoa.nome}">
    `;

}
