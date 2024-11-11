import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function escolaELivrosFavoritos() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/livros-favoritos.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Livros favoritos que os alunos gostam',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }

    criarGrafico(data, layout)

    incluirTexto(`Embora a <span>Colleen Hoover</span> seja a mais lida dos termos total de escritore , não destaca-se como a <span>preferida pelos leitores</span>. Nem supera o <span>Machado de assis</span>, mas a escritora elabora muito bem suas obras,trazendo odio ou amor a ela. <br>Essa preferência evidencia a forte conexão e apreço que as pessoas têm por ela em comparação com outros`)
}

escolaELivrosFavoritos()