"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var venda_controller_1 = require("../controllers/venda.controller");
router.get('/venda', venda_controller_1.getVendas);
router.post('/venda', venda_controller_1.createVenda);
// router.get('/users/:id', );
// router.put('/users', );
// router.delete('/users/:id', );
exports.default = router;
