# NWS - API Server

API REST desenvolvida em Node.js com Fastify, utilizando TypeScript e PostgreSQL com Drizzle ORM.

## 🚀 Tecnologias

- **Runtime**: Node.js (ES Modules)
- **Framework**: Fastify
- **Linguagem**: TypeScript
- **Banco de Dados**: PostgreSQL (pgvector)
- **ORM**: Drizzle ORM
- **Validação**: Zod
- **Linter**: Biome
- **Containerização**: Docker & Docker Compose

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- PostgreSQL (via Docker)

## 🛠️ Setup do Projeto

### 1. Clone o repositório

```bash
git clone <repository-url>
cd nws/server
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
Verifique no arquivo .env.example
```

### 4. Inicie o banco de dados

```bash
docker-compose up -d
```

### 5. Execute as migrações (se necessário)

```bash
npx drizzle-kit miggrations
```

### 6. Execute o projeto

**Desenvolvimento:**

```bash
npm run dev
```

**Produção:**

```bash
npm start
```

**Seed do banco:**

```bash
npm run db:seed
```

## 🏗️ Estrutura do Projeto

```
src/
├── db/
│   ├── connections.ts    # Configuração da conexão com banco
│   ├── migrations/       # Migrações do Drizzle
│   ├── schema/          # Schemas das tabelas
│   └── seed.ts          # Dados iniciais
├── http/
│   └── routes/          # Rotas da API
├── env.ts               # Validação de variáveis de ambiente
└── server.ts            # Servidor principal
```

## 🔧 Scripts Disponíveis

- `npm start` - Inicia o servidor em produção
- `npm run dev` - Inicia o servidor em modo desenvolvimento com hot reload
- `npm run db:seed` - Executa o seed do banco de dados

## 📡 Endpoints

- `GET /helth` - Health check da aplicação
- `GET /rooms` - Lista de salas (implementado via rota registrada)

## 🐳 Docker

O projeto inclui configuração Docker para PostgreSQL com pgvector:

```bash
# Iniciar banco de dados
docker-compose up -d

# Parar banco de dados
docker-compose down
```

## 🔍 Padrões de Projeto

- **Arquitetura**: API REST com Fastify
- **Validação**: Schema validation com Zod
- **Banco de Dados**: Migrations com Drizzle ORM
- **Type Safety**: TypeScript com type providers
- **CORS**: Configurado para localhost:5173
- **Environment**: Validação de variáveis com Zod

## 📝 Licença

ISC
