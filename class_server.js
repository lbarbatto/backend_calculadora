const Calculadora = require('./class_calculadora')
let soma = new Calculadora();
const express = require('express');
const app = express();
const port = 3000;

app.get('/calcula', (req, res) => {
  console.log(req.query);
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const n = [n1,n2];
  const opera = req.query.opera;
  let resultado = soma.calcula(n, opera);
  // res.send(`Os parametros são ${n} e "${opera}"`);
  res.send(`o resultado é ${resultado}`);
});

app.listen(port,() => {
  console.log(`Servidor operando na porta ${port}`);
});
