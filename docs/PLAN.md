# Plano de Implementação: Sistema de Autenticação, Catálogo e Compras

Este plano detalha as etapas para implementar as funcionalidades solicitadas pelo usuário, incluindo um sistema de cadastro e login, catálogo de itens, simulação de compra e uma melhoria no visual utilizando o design system obtido via `ui-ux-pro-max`.

## User Review Required

> [!IMPORTANT]
> **Aprovação do Plano**: Antes de prosseguir com o desenvolvimento (FASE 2 - Implementação Paralela), preciso da sua aprovação formal deste plano. 
> Responda "Y" para aprovar e iniciarmos o código ou "N" para revisar o plano.

## Open Questions

> [!WARNING]
> 1. Para o fluxo de "simulação de compra", você prefere apenas um modal confirmando o pedido ou uma página de "Checkout" com carrinho de compras completo antes da confirmação?
> 2. Devemos utilizar autenticação via JWT para o login?
> 3. O banco de dados continuará utilizando SQLite via Node.js/Express?

## Proposed Changes

### Banco de Dados (Backend)
- Adição da tabela `users` no SQLite (`server/database.js`).
- Adição de rotas de autenticação: `/api/register` e `/api/login` (`server/server.js`).

### Dependências
- Instalação de bibliotecas para segurança no Node.js (ex: `bcrypt` para hash de senhas e `jsonwebtoken` para autenticação).

### Frontend - Melhoria de UI/UX (Design System)
- Atualizar paleta de cores, tipografia (Inter) e estilo visual (Vibrant & Block-based).
- Criação e modificação de componentes globais (`Header`, `Footer`, `Button`, `Input`).
- Configuração do Tailwind CSS.

### Frontend - Páginas (Views)
- **Login/Register**: Telas para autenticação.
- **Catálogo**: Nova página para visualizar os produtos em formato de cards utilizando a identidade visual aprimorada.
- **Checkout/Simulação**: Tela/Modal de simulação de compra que consome a rota `/api/orders`.

## Verification Plan

### Automated Tests
- Verificar rotas do backend com requisições HTTP locais.

### Manual Verification
- Testar registro e login via interface web.
- Navegar pelo catálogo, adicionar itens e finalizar simulação de compra.
- Validar as regras de acessibilidade e design (`prefers-reduced-motion`, contraste, etc.) conforme design system.
