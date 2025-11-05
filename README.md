# Beezer
## Como rodar

### Clone o projeto: 
- git@github.com:gustacamara/cronograma-educacional-react.git
- cd cronograma-educacional-react

### Backend:
Entre na pasta backend usando cd backend e configure as variaveis de ambiente criando um arquivo `.env` e configure as variaveis de acordo com o `template.env`.

**Rode os seguintes comandos:**
- docker compose up -d
- npm i
- npm start

**Caso não funcione limpe o docker:**
- docker compose down -v ( remove os container do docker )
- docker compose up -d ( monta o container )


### Frontend:
Entre no diretório do frontend: cd frontend

**Rode os comandos:**
- npm i
- npm run dev 
