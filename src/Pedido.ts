import { Produto } from "./Produto";

export class Pedido {
  private id: number;
  private data: Date;
  private status: string;
  private itens: Produto[] = [];

  constructor(id: number, data: Date, status: string) {
    this.id = id;
    this.data = data;
    this.status = status;
  }

  public confirmarPedido(): void {
    this.status = "Confirmado";
  }

  public adicionarItem(produto: Produto): void {
    this.itens.push(produto);
  }

  public calcularTotal(): number {
    return this.itens.reduce((soma, p) => soma + p.getPreco(), 0);
  }
}
