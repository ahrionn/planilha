const express = require('express')

const TransacoesRepositorio = require("./transacoes-repositorio")

const app = express()
const port = 3000;

app.use(express.static(`${__dirname}/public`))

app.use(express.json());

app.get('/transacoes', (req, res) => {
  const repositorio = new TransacoesRepositorio()
  const transacoes = repositorio.listarTransacoes()
  res.send(transacoes)
})

app.post('/transacoes', (req, res) => {

  const repositorio = new TransacoesRepositorio()

  const transacao = req.body

  repositorio.criarTransacao(transacao)
  res.send(transacao)

})

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});