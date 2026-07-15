const galeria = document.getElementById("galeria");

const pessoa = pessoas[0];

galeria.innerHTML = `
    <img src="imagens/${pessoa.foto}" alt="${pessoa.nome}">
`;
