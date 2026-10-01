import express from 'express';
import { Router } from './routes/veiculo.routes.js';
import { veiculosRouter } from './services/veiculo.service.js';

const app = Router();

const port = 3000;

app.use(express());
app.use("/veiculos", veiculosRouter);

app.listen(port => {

console.log(`API funcionando em http://localhost:${port}`)

});