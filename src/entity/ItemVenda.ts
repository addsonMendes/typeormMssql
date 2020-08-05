import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Venda } from "./Venda";

@Entity()
export class ItemVenda {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    codigoBarras: string;

    @Column()
    descricao: string;
    
    @Column()
    valorItem: number;
    
    @Column()
    qtdVendida: number;

    @ManyToOne(type => Venda, itens => ItemVenda, {eager: true})
    venda: Venda;
}