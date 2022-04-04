const express = require('express');
const Calculadora = require('../rep/func_calculadora')
const calculaRoute = express.Router();


calculaRoute.get('/calcula', (req, res) => { // /calcula?n1=9&n2=18&opera=p
  console.log(req.query);
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const n = [n1,n2];
  const opera = req.query.opera;
  const resultado = Calculadora(n, opera);
  

  if(isNaN(n1) && isNaN(n2) ){
    res.send(`Faltam os dois número. A consulta de ser assim http://localhost:3000/calcula?n1=9&n2=18&opera=p`);
  }else if(isNaN(n1)){
    res.send(`Falta o primeiro número. A consulta de ser assim http://localhost:3000/calcula?n1=9&n2=18&opera=p`);    
  }else if(isNaN(n2)){
    res.send(`Falta o segundo número. A consulta de ser assim http://localhost:3000/calcula?n1=9&n2=18&opera=p`);    
  } else{
    const resultado = Calculadora(n, opera);
    res.send(`o resultado é ${resultado}`);
  }

});

calculaRoute.get('', (req, res) => {
  res.send(`Consulta inválida. Essa é um exemplo de consulta válida http://localhost:3000/calcula?n1=9&n2=18&opera=p`);
});

calculaRoute.post('/calculadora', (req, res) => {
  const objeto = req.body;
  if(objeto.n1===undefined || objeto.n2===undefined || objeto.opera===undefined ){
      res.send("Requisição errada. Veja o exemplo de Requisição: { n1: 12, n2: 12, opera: '+' }");
  } else{
      const n = [objeto.n1, objeto.n2]
      const resultado = Calculadora(n, objeto.opera);
      res.send(`o resultado é ${resultado}`);
  }
});

module.exports=calculaRoute;
