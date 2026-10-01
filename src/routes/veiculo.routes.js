import { Router } from "express";
import { veiculoService } from '../services/veiculo.service'

export const veiculosRouter = Router();

veiculosRouter.get("/", async (req, res) => {

    const veiculos = await veiculoService.getAll();
    return res.json(veiculos);

});

veiculosRouter.post("/", async (req, res) => {

    const veiculos = await veiculoService.create(req, body);
    return res.status(201).json(veiculos);

})