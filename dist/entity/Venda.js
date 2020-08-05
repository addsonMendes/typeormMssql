"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = void 0;
var typeorm_1 = require("typeorm");
var Vendedor_1 = require("./Vendedor");
var ItemVenda_1 = require("./ItemVenda");
var Venda = /** @class */ (function () {
    function Venda() {
    }
    Venda_1 = Venda;
    var Venda_1;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Venda.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Venda.prototype, "codVenda", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Venda.prototype, "valorVenda", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Venda.prototype, "dataVenda", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Vendedor_1.Vendedor; }, { cascade: true }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Vendedor_1.Vendedor)
    ], Venda.prototype, "vendedor", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ItemVenda_1.ItemVenda; }, function (venda) { return Venda_1; }),
        __metadata("design:type", Array)
    ], Venda.prototype, "itens", void 0);
    Venda = Venda_1 = __decorate([
        typeorm_1.Entity()
    ], Venda);
    return Venda;
}());
exports.Venda = Venda;
