import { Usuario } from "./Usuario";

export class Avaliacao {
  private id: number;
  private nota: number;
  private comentario: string;
  private data: Date;
  private usuario: Usuario;

  constructor(id: number, nota: number, comentario: string, data: Date, usuario: Usuario) {
    this.id = id;
    this.nota = nota;
    this.comentario = comentario;
    this.data = data;
    this.usuario = usuario;
  }

  public validar(): boolean {
    return this.nota >= 1 && this.nota <= 5;
  }

  public exibir(): void {
    console.log(`${this.usuario.getNome()} avaliou com nota ${this.nota}: ${this.comentario}`);
  }
}
