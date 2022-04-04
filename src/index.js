const express = require ('express');
const calculaRoute = require ('./rts/calcula_rota');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(calculaRoute);

app.listen(port, () => {
    console.log(`Servidor na porta ${port}. Enviar: http://localhost:3000/calcula?n1=9&n2=18&opera=p`);
});