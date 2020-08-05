import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, OneToMany } from "typeorm";
import { Vendedor } from "./Vendedor";
import { ItemVenda } from "./ItemVenda";

@Entity()
export class Venda {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codVenda: string;

    @Column()
    valorVenda: number;

    @Column()
    dataVenda: Date;

    @OneToOne(type => Vendedor, {cascade: true})
    @JoinColumn()
    vendedor: Vendedor;

    @OneToMany(type => ItemVenda, venda => Venda)
    itens: ItemVenda[];
}