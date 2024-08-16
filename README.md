# CarePulse

> Status: Em desenvolvimento...

CarePulse é um sistema de gerenciamento de pacientes de saúde projetado para simplificar o registro de pacientes, o agendamento de consultas e a gestão de prontuários médicos para prestadores de serviços de saúde.

## Tecnologias Utilizadas

- **Next.js**: Framework React para desenvolvimento de aplicações web.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **TailwindCSS**: Framework CSS para estilização rápida e responsiva.
- **ShadCN**: Biblioteca de componentes UI que integra com TailwindCSS.
- **Appwrite**: Plataforma backend que fornece autenticação, banco de dados, funções e armazenamento.
- **Twilio**: Serviço de comunicação para enviar notificações por SMS.
- **Sentry**: Ferramenta de monitoramento para rastrear erros e desempenho da aplicação.

## Funcionalidades

- **Registro de Pacientes**: Permite que os usuários se registrem e criem um perfil pessoal como paciente.
- **Agendamento de Consultas**: Pacientes podem agendar consultas com médicos de forma conveniente.
- **Gerenciamento de Compromissos pelo Administrador**: Administradores podem visualizar, confirmar, agendar e cancelar compromissos.
- **Notificações por SMS**: Pacientes recebem notificações por SMS para confirmar os detalhes da consulta.
- **Upload de Arquivos**: Usuários podem carregar e armazenar arquivos com segurança usando Appwrite.
- **Monitoramento de Desempenho**: Uso do Sentry para monitorar e rastrear o desempenho do aplicativo e detectar erros.
- **Design Responsivo**: A aplicação funciona perfeitamente em todos os tipos de dispositivos e tamanhos de tela.

## Estrutura do Projeto

- `app/`: Contém as páginas principais da aplicação.
- `components/`: Contém os componentes reutilizáveis da UI.
- `app/globals.css`: Contém as estilizações usando TailwindCSS.
- `lib/`: Contém funções auxiliares e integração com serviços como Twilio e Appwrite.
- `public/`: Contém arquivos públicos como imagens e ícones.
- `sentry/`: Configuração e integração com o Sentry para monitoramento.

## Instalação e Uso

### Pré-requisitos

- Node.js v18.8+
- npm ou yarn

### Passos para Instalação

1. Clone o repositório:

```bash
  git clone https://github.com/gafanhotoalexandre/carepulse.git
```

2. Acesse o diretório do projeto:

```bash
  cd carepulse
```

3. Instale as dependências:

```bash
  npm install

  # ou

  yarn install
```

4. Configure as variáveis de ambiente no arquivo `.env`

5. Inicie o servidor de desenvolvimento:

```bash
  npm run dev

  # ou

  yarn dev
```

6. Acesse o projeto em http://localhost:3000.
