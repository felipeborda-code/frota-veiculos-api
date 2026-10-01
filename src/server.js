import express from 'express';
import { Router } from '..config/db.js'
import { veiculosRouter } from './routes/veiculo.routes';

const app = Router();

const port = 3000;

app.use(express());
app.use("/veiculos", Router);

app.listen(port => {

console.log(`API funcionando em http://localhost:${port}`)

});