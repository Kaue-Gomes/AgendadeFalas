# Web Application

Uma aplicação web moderna construída com React, TypeScript e Vite para gerenciamento de salas/rooms.

## 🚀 Tecnologias Utilizadas

### Core

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server rápido

### Roteamento e Estado

- **React Router DOM** - Roteamento client-side
- **TanStack Query** - Gerenciamento de estado server-side e cache

### UI/UX

- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones modernos
- **Class Variance Authority** - Sistema de variantes para componentes

### Desenvolvimento

- **Biome** - Linter e formatter (substitui ESLint + Prettier)
- **Ultracite** - Configuração de linting otimizada

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/          # Componentes base (Button, Theme, etc.)
├── hooks/           # Custom hooks
├── lib/             # Utilitários e configurações
├── pages/           # Componentes de página
│   ├── create-room.tsx
│   └── room.tsx
├── app.tsx          # Componente principal
└── main.tsx         # Entry point
```

## 🛠️ Configuração e Setup

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd web
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção localmente

## 🎯 Funcionalidades

- **Criação de Salas**: Interface para criar e gerenciar salas
- **Navegação entre Salas**: Sistema de roteamento para acessar salas específicas
- **Integração com API**: Comunicação com backend via REST API
- **Interface Responsiva**: Design adaptável para diferentes dispositivos

## 🔧 Padrões de Projeto

### Estrutura de Componentes

- Componentes funcionais com hooks
- Separação clara entre páginas e componentes UI
- Uso de TypeScript para tipagem

### Gerenciamento de Estado

- TanStack Query para cache e sincronização com servidor
- React Router para navegação e parâmetros de URL

### Estilização

- Tailwind CSS para estilos utilitários
- Componentes Radix UI para acessibilidade
- Sistema de temas com suporte a modo escuro/claro

### Configuração

- Aliases de importação configurados (`@/` para `src/`)
- Biome para linting e formatação
- TypeScript com configuração estrita

## 🌐 API Integration

A aplicação se conecta com uma API backend na porta `3333`:

- Endpoint: `http://localhost:3333/rooms`
- Método: GET
- Retorna: Lista de salas com `id` e `name`

## 📝 Licença

Este projeto é privado e proprietário.
