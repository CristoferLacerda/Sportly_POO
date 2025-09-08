import { Usuario } from "./Usuario";
import { Administrador } from "./Administrador";
import { Produto } from "./Produto";
import { Carrinho } from "./Carrinho";
import { Pedido } from "./Pedido";
import { Conteudo } from "./Conteudo";
import { Avaliacao } from "./Avaliacao";

// Usuário e administrador
const user = new Usuario(1, "Aline", "123.456.789-00", "aline@gmail.com", "123", "Iniciante", ["futebol"]);
const admin = new Administrador(2, "Maria", "987.654.321-00", "admin@sportly.com", "123", "Avançado", [], 1);

// Produto
const produto = new Produto(1, "Bola de Futebol Jabulani", "Bola oficial", 100, 10, "Esporte");
admin.cadastrarProduto(produto);

// Conteúdo
const guia = new Conteudo(1, "Futebol - Guia", "Dicas de treino", "guia", "iniciante");
admin.publicarConteudo(guia);

// Carrinho e pedido
const carrinho = new Carrinho(1, user);
carrinho.adicionarProduto(produto);

const pedido = new Pedido(1, new Date(), "Aberto");
pedido.adicionarItem(produto);
pedido.confirmarPedido();

console.log("Total do pedido:", pedido.calcularTotal());

// Avaliação
const avaliacao = new Avaliacao(1, 5, "Tri massa!", new Date(), user);
avaliacao.exibir();
