import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Venda } from "../entity/Venda";
import { Vendedor } from "../entity/Vendedor";

export const getVendas = async (req: Request, res: Response): Promise<Response> => {
    const venda = await getRepository(Venda).find({relations: ['vendedor'] });
    return res.json(venda);
}

export const createVenda = async (req: Request, res: Response): Promise<Response> => {
    try {
        const repo = getRepository(Venda);
        const result = await repo.save(req.body);
        return res.status(201).json(result)
    } catch(error) {
        console.log('err.message :>> ', error.message);
        return res.status(400).send();
    }


    // const vendedor = await getRepository(Vendedor).create(req.body.vendedor);
    // const resultVendedor = await getRepository(Vendedor).save(vendedor);

    // let vendaRec = new Venda();
    // vendaRec.codVenda = req.body.codVenda;
    // vendaRec.valorVenda = req.body.valorVenda;
    // vendaRec.dataVenda = req.body.dataVenda;
    // vendaRec.vendedor.id = resultVendedor[0].id;

    // // let vendaRec = {codVenda: req.body.codVenda, valorVenda: req.body.valorVenda, dataVenda: req.body.dataVenda, vendedorId: resultVendedor[0]};

    // const novaVenda = await getRepository(Venda).create(vendaRec);
    // const results = await getRepository(Venda).save(novaVenda);

    // return res.json(results);
}