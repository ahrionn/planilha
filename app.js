const express = require('express')

const TransacoesRepositorio = require("./transacoes-repositorio")

const app = express()
const port = 3000;

app.use(express.static(`${__dirname}/public`))

app.get('/transacoes', (req, res) => {
  const repositorio = new TransacoesRepositorio()
  const transacoes = repositorio.listarTransacoes()
  res.send(transacoes)
})

app.get('/criartransacao', (req, res) => {

  const repositorio = new TransacoesRepositorio()

  const transacao = {
    valor: 10,
    descricao: "bolo"
  }

  const transacoes = repositorio.criarTransacao(transacao)
  res.send(transacoes)
})

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});