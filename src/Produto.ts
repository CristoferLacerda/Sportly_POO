export class Produto {
  private id: number;
  private nome: string;
  private descricao: string;
  private preco: number;
  private estoque: number;
  private categoria: string;

  constructor(id: number, nome: string, descricao: string, preco: number, estoque: number, categoria: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.estoque = estoque;
    this.categoria = categoria;
  }

  public calcularDesconto(percentual: number): number {
    return this.preco - (this.preco * percentual / 100);
  }

  // Encapsulamento
  public getNome(): string {
    return this.nome;
  }

  public getPreco(): number {
    return this.preco;
  }

  public getEstoque(): number {
    return this.estoque;
  }

  public setEstoque(novoEstoque: number): void {
    if (novoEstoque >= 0) {
      this.estoque = novoEstoque;
    }
  }
}
