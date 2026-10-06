import { Router } from "express";
import { veiculosService } from '../services/veiculo.service.js'

export const veiculosRouter = new Router();

veiculosRouter.get("/", async (req, res) => {
    const veiculos = await veiculosService.getAll();
    return res.status(200).json(veiculos);

});

veiculosRouter.post("/", async (req, res) => {

    const veiculos = await veiculosService.create(req.body);
    return res.status(201).json(veiculos);

});