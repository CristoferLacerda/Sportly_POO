import { Usuario } from "./Usuario";
import { Produto } from "./Produto";
import { Conteudo } from "./Conteudo";

// Classe Administrador herda de Usuario
export class Administrador extends Usuario {
  private nivelAcesso: number;

  constructor(id: number, nome: string, email: string, senha: string, nivelAcesso: number) {
    super(id, nome, email, senha);
    this.nivelAcesso = nivelAcesso;
  }

  // Polimorfismo: sobrescreve exibirPerfil() da classe Usuario
  public override exibirPerfil(): void {
    console.log(`Administrador: ${this.getNome()} | Nível de acesso: ${this.nivelAcesso}`);
  }

  public cadastrarProduto(produto: Produto): void {
    console.log(`Produto cadastrado: ${produto.getNome()}`);
  }

  public publicarConteudo(conteudo: Conteudo): void {
    console.log(`Conteúdo publicado: ${conteudo.getTitulo()}`);
  }
}
