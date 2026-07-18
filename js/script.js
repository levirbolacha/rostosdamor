const galeria = document.getElementById("galeria");

const modal = document.getElementById("modal");
const modalFoto = document.getElementById("modal-foto");
const modalNome = document.getElementById("modal-nome");
const modalNascimento = document.getElementById("modal-nascimento");
const modalFalecimento = document.getElementById("modal-falecimento");
const modalProfissao = document.getElementById("modal-profissao");
const modalBiografia = document.getElementById("modal-biografia");
const botaoFicha = document.getElementById("ver-ficha");
const fechar = document.getElementById("fechar");
const pesquisa = document.getElementById("pesquisa");

let pessoas = [];

function mostrarModal(pessoa){

    modal.style.display = "flex";

    modalFoto.src = `imagens/${pessoa.id}/${pessoa.fotografiaPrincipal}`;

    modalNome.textContent = pessoa.nome;

    modalNascimento.textContent =
        pessoa.nascimento.data ?
        "Nascimento: " + pessoa.nascimento.data : "";

    modalFalecimento.textContent =
        pessoa.falecimento.data ?
        "Falecimento: " + pessoa.falecimento.data : "";

    modalProfissao.textContent =
        pessoa.profissao ?
        "Profissão: " + pessoa.profissao : "";

    modalBiografia.textContent = pessoa.biografiaCurta || "";

    botaoFicha.onclick = function(){

        window.location.href = "pessoa.html?id=" + pessoa.id;

    };

}

function construirGaleria(lista){

    galeria.innerHTML = "";

    for(const pessoa of lista){

        const cartao = document.createElement("div");
        cartao.className = "cartao";

        cartao.innerHTML = `
            <img
                src="imagens/${pessoa.id}/${pessoa.fotografiaPrincipal}"
                alt="${pessoa.nome}">
            <h3>${pessoa.nome}</h3>
        `;

        cartao.querySelector("img")
            .addEventListener("click", ()=>mostrarModal(pessoa));

        galeria.appendChild(cartao);

    }

}

async function iniciar(){

    pessoas = await obterTodasAsPessoas();

    pessoas.sort((a,b)=>a.nome.localeCompare(b.nome,"pt"));

    construirGaleria(pessoas);

}

if(pesquisa){

    pesquisa.addEventListener("input",function(){

        const texto = this.value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g,"");

        const resultado = pessoas.filter(p=>{

            return p.nome
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g,"")
                .includes(texto);

        });

        construirGaleria(resultado);

    });

}

fechar.addEventListener("click",()=>{

    modal.style.display="none";

});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});

iniciar();