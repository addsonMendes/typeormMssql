import { Router } from 'express'
const router = Router();

import { getVendas, createVenda } from "../controllers/venda.controller";

router.get('/venda', getVendas);
router.post('/venda', createVenda);
// router.get('/users/:id', );
// router.put('/users', );
// router.delete('/users/:id', );


export default router;