# BitCent

[https://barber-project-e7916.web.app](https://bitcent-eight.vercel.app)

## Sobre o projeto

Projeto desenvolvido em conjunto durante o evento Transformação Dev da Cod3r.
link do canal do YouTube: https://www.youtube.com/@cod3r

O projeto se trata de em um sistema de gestão financeira.

### O projeto conta com:
- Landing Page
- Autentificação com Google
- Criar, editar e excluir receitas

## Tecnologias utilizadas
- Tailwind CSS
- TypeScript
- React JS
- Next JS
- Firestore Database
- Firebase Authentication

# Como executar o projeto

## Back end
Pré-requisitos: Conta no Google

- Crie um projeto no Firebase
- Adicione Firestore Database ao projeto
- Copie e cole as informações do projeto para o arquivo na pasta scr/logic/firebase/config/app.js
  exemplo:
```bash
const firebaseConfig = {
  apiKey: "Sua apikey",
  authDomain: "barber-project.firebaseapp.com",
  projectId: "barber-project",
  storageBucket: "barber-project.appspot.com",
  messagingSenderId: "7293385165",
  appId: "1:7293385165:web:9e8a52a7d282d1dd7502"
}
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
https://github.com/GuiPiangers/bitcent

# entrar na pasta do projeto front end web
cd bitcent

# instalar dependências
npm install

# executar o projeto
npm run dev
```

# Autor

Guilherme Eduardo Martins Piangers

https://www.linkedin.com/in/guilherme-piangers

