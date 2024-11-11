import { getCSS, tickConfig, criarGrafico } from "./common.js"

async function quantidadeDeleitores() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDoslivros = Object.keys(dados)
    const quantidadeDeLeitores = Object.values(dados)

    const data = [
        {
            x: nomeDoslivros, 
            y: quantidadeDeLeitores, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Livros mais lidos no mundo',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'nome dos livros',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'milhões de leitores',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }

    }

    criarGrafico(data, layout)
}

quantidadedeLeitores()