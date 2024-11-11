const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesEscolar() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasLendo = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNaEscola = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemLendo = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasLendo} algumas</span> pessoas e que aproximadamente <span>${pessoasNaEscola} 10</span> estão lendo algum livro e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> lendo.<br>Isso significa que aproximadamente <span>${porcentagemLendo}%</span> de pessoas estão lendo algum livro.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesEscolares()