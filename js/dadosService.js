async function obterIndice() {

    const resposta = await fetch("dados/indice.json");

    if (!resposta.ok) {
        throw new Error("Erro ao carregar o índice.");
    }

    return await resposta.json();

}

async function obterPessoa(id) {

    const resposta = await fetch(`dados/pessoas/${id}.json`);

    if (!resposta.ok) {
        throw new Error(`Erro ao carregar a pessoa ${id}.`);
    }

    return await resposta.json();

}

async function obterTodasAsPessoas() {

    const indice = await obterIndice();

    const pessoas = await Promise.all(
        indice.map(item => obterPessoa(item.id))
    );

    return pessoas;

}