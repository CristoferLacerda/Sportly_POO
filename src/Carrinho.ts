import { Produto } from "./Produto";
import { Usuario } from "./Usuario";

export class Carrinho {
  private id: number;
  private usuario: Usuario;
  private produtos: Produto[] = [];

  constructor(id: number, usuario: Usuario) {
    this.id = id;
    this.usuario = usuario;
  }

  public adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  public removerProduto(produto: Produto): void {
    this.produtos = this.produtos.filter(p => p !== produto);
  }

  public calcularTotal(): number {
    return this.produtos.reduce((soma, p) => soma + p.getPreco(), 0);
  }

  public listarProdutos(): string[] {
    return this.produtos.map(p => p.getNome());
  }
}
