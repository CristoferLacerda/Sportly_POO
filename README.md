# 🏋️ Sportly - POO (Orientação a Objetos)

Este repositório contém a implementação das classes principais do projeto **Sportly** utilizando **TypeScript** com foco em **Programação Orientada a Objetos (POO)**. Ele representa a camada de lógica de negócio do sistema, responsável por modelar entidades como Usuário, Treino, Modalidade e Pedido.

🔗 Repositórios relacionados:

* Frontend: [Sportly Frontend](https://github.com/CristoferLacerda/FrontEnd_Sportly)
* Backend/API: [SportlyDB](https://github.com/CristoferLacerda/SportlyDB)

---

## 🚀 Tecnologias Utilizadas

* [TypeScript](https://www.typescriptlang.org/) – Superset do JavaScript com tipagem estática
* [Node.js](https://nodejs.org/) – Ambiente de execução JavaScript
* [ESLint](https://eslint.org/) – Linter para garantir qualidade e padronização de código

---

## 📂 Estrutura do Projeto

```
Sportly_POO/
├── src/
│   ├── classes/
│   │   ├── Usuario.ts
│   │   ├── Treino.ts
│   │   ├── Modalidade.ts
│   │   └── Pedido.ts
│   └── index.ts
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Como Rodar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/CristoferLacerda/Sportly_POO.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd Sportly_POO
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Compile o código TypeScript:

   ```bash
   npx tsc
   ```

5. Execute o arquivo principal:

   ```bash
   node dist/index.js
   ```

---

## 🧱 Classes Principais

### `Usuario`

Representa um usuário do sistema.

```typescript
class Usuario {
  id: number;
  nome: string;
  email: string;
  cpf: string;

  constructor(id: number, nome: string, email: string, cpf: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
  }
}
```

### `Treino`

Representa um treino realizado por um usuário.

```typescript
class Treino {
  id: number;
  usuarioId: number;
  data: Date;
  duracao: number; // em minutos

  constructor(id: number, usuarioId: number, data: Date, duracao: number) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.data = data;
    this.duracao = duracao;
  }
}
```

### `Modalidade`

Representa uma modalidade esportiva disponível no sistema.

```typescript
class Modalidade {
  id: number;
  nome: string;
  descricao: string;

  constructor(id: number, nome: string, descricao: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
  }
}
```

### `Pedido`

Representa um pedido de treino personalizado feito por um usuário.

```typescript
class Pedido {
  id: number;
  usuarioId: number;
  modalidadeId: number;
  dataPedido: Date;

  constructor(id: number, usuarioId: number, modalidadeId: number, dataPedido: Date) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.modalidadeId = modalidadeId;
    this.dataPedido = dataPedido;
  }
}
```
