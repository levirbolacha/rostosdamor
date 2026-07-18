const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const ficha = document.getElementById("ficha");

function criarLista(titulo, lista) {

    if (!lista || lista.length === 0) return "";

    return `
        <section class="bloco-ficha">
            <h2>${titulo}</h2>
            <ul>
                ${lista.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </section>
    `;

}

function criarGaleria(pessoa) {

    if (!pessoa.fotografias || pessoa.fotografias.length === 0)
        return "";

    return `
        <section class="bloco-ficha">

            <h2>Galeria</h2>

            <div class="galeria-fotos">

                ${pessoa.fotografias.map(foto => `

                    <img
                        src="imagens/${pessoa.id}/${foto}"
                        alt="${pessoa.nome}">

                `).join("")}

            </div>

        </section>
    `;

}

async function iniciar() {

    const pessoa = await obterPessoa(id);

    document.title = `${pessoa.nome} • Rostos d'Amor`;

    ficha.innerHTML = `

        <article class="ficha-pessoa">

            <div class="cabecalho-pessoa">

                <img
                    class="foto-principal"
                    src="imagens/${pessoa.id}/${pessoa.fotografiaPrincipal}"
                    alt="${pessoa.nome}">

                <div class="dados-principais">

                    <h1>${pessoa.nome}</h1>

                    ${pessoa.profissao ? `
                        <p><strong>Profissão:</strong> ${pessoa.profissao}</p>
                    ` : ""}

                    ${(pessoa.nascimento.data || pessoa.nascimento.local) ? `
                        <p><strong>Nascimento:</strong>
                        ${pessoa.nascimento.data}
                        ${pessoa.nascimento.local ? " — " + pessoa.nascimento.local : ""}
                        </p>
                    ` : ""}

                    ${(pessoa.falecimento.data || pessoa.falecimento.local) ? `
                        <p><strong>Falecimento:</strong>
                        ${pessoa.falecimento.data}
                        ${pessoa.falecimento.local ? " — " + pessoa.falecimento.local : ""}
                        </p>
                    ` : ""}

                </div>

            </div>

            ${pessoa.biografiaCurta ? `
                <section class="bloco-ficha">
                    <h2>Biografia</h2>
                    <p>${pessoa.biografiaCurta}</p>
                </section>
            ` : ""}

            ${pessoa.biografiaCompleta ? `
                <section class="bloco-ficha">
                    <h2>História de Vida</h2>
                    <p>${pessoa.biografiaCompleta}</p>
                </section>
            ` : ""}

            ${criarGaleria(pessoa)}

            ${criarLista("Pais", pessoa.pais)}

            ${criarLista("Irmãos", pessoa.irmaos)}

            ${criarLista("Cônjuge", pessoa.conjuge)}

            ${criarLista("Filhos", pessoa.filhos)}

            ${criarLista("Documentos", pessoa.documentos)}

            ${criarLista("Fontes", pessoa.fontes)}

            ${criarLista("Notas", pessoa.notas)}

        </article>

    `;

}

iniciar();