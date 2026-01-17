# A.J. Negócios - Agente IA Imobiliário

Sistema completo de gerenciamento imobiliário com agente IA integrado.

## 🚀 Tecnologias

- **Frontend:** React 19 + Tailwind CSS 4
- **Backend:** Node.js + Express + tRPC
- **Banco de Dados:** PostgreSQL (via Drizzle ORM)
- **Autenticação:** Manus OAuth

## 📦 Instalação Local

```bash
# Instalar dependências
pnpm install

# Configurar banco de dados
pnpm db:push

# Iniciar servidor de desenvolvimento
pnpm dev
```

## 🌐 Deploy no Railway

### Pré-requisitos

- Conta no Railway (https://railway.app)
- Banco de dados PostgreSQL criado no Railway

### Passos

1. **Conecte o repositório GitHub ao Railway**
2. **Configure as variáveis de ambiente** (veja seção abaixo)
3. **Deploy automático** será feito pelo Railway

### Variáveis de Ambiente Necessárias

O Railway já injeta automaticamente:
- `DATABASE_URL` - URL de conexão do PostgreSQL

Você precisa adicionar (se necessário):
- `NODE_ENV=production`
- `PORT=3000`

### Comandos do Railway

- **Build:** `pnpm install && pnpm build`
- **Start:** `pnpm start`

## 📝 Estrutura do Projeto

```
├── client/              # Frontend React
│   ├── src/
│   │   ├── pages/      # Páginas
│   │   ├── components/ # Componentes UI
│   │   └── lib/        # Utilitários
├── server/              # Backend Node.js
│   ├── routers.ts      # Rotas tRPC
│   ├── db.ts           # Queries do banco
│   └── _core/          # Sistema interno
├── drizzle/             # Schema do banco
└── shared/              # Tipos compartilhados
```

## 🔧 Scripts Disponíveis

- `pnpm dev` - Inicia servidor de desenvolvimento
- `pnpm build` - Compila para produção
- `pnpm start` - Inicia servidor de produção
- `pnpm db:push` - Aplica schema no banco de dados
- `pnpm test` - Executa testes

## 📄 Licença

MIT
