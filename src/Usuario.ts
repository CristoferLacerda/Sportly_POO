// Classe base para qualquer usuário da Sportly
export class Usuario {
  protected id: number;
  protected nome: string;
  protected email: string;
  private senha: string;

  constructor(id: number, nome: string, email: string, senha: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  // Método que pode ser sobrescrito por subclasses (exemplo de polimorfismo)
  public exibirPerfil(): void {
    console.log(`Usuário: ${this.nome} | Email: ${this.email}`);
  }

  public login(senha: string): boolean {
    return this.senha === senha;
  }

  public getNome(): string {
    return this.nome;
  }
}
