// Classe base Conteúdo (pode ser Guia, Artigo, Vídeo etc.)
export class Conteudo {
  protected id: number;
  protected titulo: string;
  protected descricao: string;

  constructor(id: number, titulo: string, descricao: string) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
  }

  // Método que pode ser sobrescrito (polimorfismo)
  public exibir(): void {
    console.log(`Conteúdo: ${this.titulo} - ${this.descricao}`);
  }

  public getTitulo(): string {
    return this.titulo;
  }
}

// Subclasse específica de Conteúdo
export class GuiaEsportivo extends Conteudo {
  private nivel: string;

  constructor(id: number, titulo: string, descricao: string, nivel: string) {
    super(id, titulo, descricao);
    this.nivel = nivel;
  }

  // Polimorfismo: muda a forma de exibir()
  public override exibir(): void {
    console.log(`Guia Esportivo [${this.nivel}]: ${this.titulo}`);
  }
}
