let cardContainer = document.querySelector('.card-container');
let dados = [];

// Função para carregar os dados do JSON e renderizar todos os cards inicialmente
async function carregarDados() {
    let resposta = await fetch('data.json');
    dados = await resposta.json();
    renderizarCards(dados);
}

// Função para filtrar e renderizar os cards com base na busca
function iniciarBusca() {
    const termoBusca = document.getElementById('search-input').value.toLowerCase();
    const dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) ||
        dado.nome_popular.toLowerCase().includes(termoBusca) ||
        dado.nome_cientifico.toLowerCase().includes(termoBusca) ||
        dado.descricao.toLowerCase().includes(termoBusca)
    );
    renderizarCards(dadosFiltrados);
}

function limparBusca(){
    document.getElementById('search-input').value = '';
    renderizarCards(dados);
}

function renderizarCards(dados) {
    // Limpa o container antes de renderizar novos cards
    cardContainer.innerHTML = '';

    for(let dado of dados){
        let article = document.createElement('article');
        article.classList.add('card');
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p><b>Nome popular: </b>${dado.nome_popular}</p>
            <p><b>Nome científico: </b>${dado.nome_cientifico}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
        `;
        cardContainer.appendChild(article);
    }
}

// Adiciona o event listener para a tecla Enter no campo de busca
document.getElementById('search-input').addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada foi 'Enter'
    if (event.key === 'Enter') {
        iniciarBusca();
    }
});

// Chama a função para carregar os dados quando a página carregar
window.onload = carregarDados;