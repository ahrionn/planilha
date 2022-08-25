async function puxarDados() {

    const url = '/transacoes'

    const respostaFetch = await fetch(url)
    const respostaJson = await respostaFetch.json()

    exibirSaldo(respostaJson)
    adicionarTransacoes(respostaJson)

}
async function mandarDados(resposta) {

    const url = '/transacoes'

    const respostaFetch = {
        method: 'POST',
        body: JSON.stringify(resposta),
        headers: {
            "content-type": "application/json"
        }
    }
    await fetch(url, respostaFetch)
}
function exibirSaldo(api) {

    document.getElementById('saldo').innerHTML = api.saldo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
function adicionarTransacoes(api) {

    let tabela = '';

    api.transacoes.forEach(transacao => {
        let linha = `
      <tr>
        <td class="coluna-descricao">${transacao.descricao}</td> 
        <td class="coluna-categoria">${transacao.categoria}</td>
        <td class="coluna-valor">${transacao.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
      </tr>
      `
        tabela += linha
    })
    document.getElementById('lista-transacoes-conteudo').innerHTML = tabela
}

puxarDados()

////////////////////// --- FUNÇÃO DESPESA --- ////////////////////////////

function adicionarDespesa() {

    const descricaoDespesa = window.prompt('Qual a descricao de sua despesa?');
    const valorDespesa = window.prompt('Qual o valor de sua despesa?');

    if (valorDespesa.indexOf(',') > 0) {
        alert('Você deve digitar números com o símbolo decimal ponto, e não vírgula');
        return
    }

    if (isNaN(valorDespesa)) {
        alert('Você deve digitar um número no campo valor!');
        return;
    }

    const valor = Number(valorDespesa);

    const respostaDespesa = {
        descrição: descricaoDespesa,
        valor: valor,
        categoria: 'Despesa',
    }

    mandarDados(respostaDespesa)
    puxarDados()

}

////////////////////// --- FUNÇÃO DESPESA --- ////////////////////////////

////////////////////// --- FUNÇÃO RECEITA --- ////////////////////////////

function adicionarReceita() {

    const descricaoReceita = window.prompt('Qual a descricao de sua receita?');
    const valorReceita = window.prompt('Qual o valor de sua receita?');

    if (valorReceita.indexOf(',') > 0) {
        alert('Você deve digitar números com o símbolo decimal ponto, e não vírgula');
        return
    }

    if (isNaN(valorReceita)) {
        alert('Você deve digitar um número no campo valor!');
        return;
    }

    const valor = Number(valorReceita);

    const respostaReceita = {
        descrição: descricaoReceita,
        valor: valor,
        categoria: 'Receita',
    }

    mandarDados(respostaReceita)
    puxarDados()

}

  ////////////////////// --- FUNÇÃO RECEITA --- ////////////////////////////