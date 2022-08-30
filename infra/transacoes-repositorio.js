
class TransacoesRepositorio {

    listarTransacoes() {
        return transacoes
    }

    criarTransacao(transacao) {
        const lista = transacoes.transacoes
        lista.push(transacao)
        return transacao
    }

}

module.exports = TransacoesRepositorio