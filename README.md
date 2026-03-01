![Image](https://github.com/user-attachments/assets/b6372cc8-2766-439f-8c88-d741eae766b9)
## Sobre a disciplina
Este projeto foi desenvolvido na disciplina de Experiência Criativa, da PUCPR, na qual foram explorados os conceitos do Design Thinking. Utilizando-se desta técnica, nós deveríamos achar uma "dor" para ser resolvida, e, ao final, entregar um MVP do produto. 

Como o foco principal era praticar o Design Thinking, o tempo para a produção do MVP em si era curto e os alunos deste grupo aproveitaram a oportunidade para testar tecnologias novas, com as quais não tinham familiaridade, ou se colocaram em situações onde não possuíam tanta experiência, a fim de aproveitar este trabalho também como laboratório de aprendizado. E, por isso, é importante ressaltar que, apesar de funcionar e cumprir com os objetivos, a qualidade de código e organização de arquivos no geral está muito aquém da ideal.

## Como rodar

Clone o projeto: 

```git clone git@github.com:ana-borowsky/cronograma-educacional-react.git```

Entre na pasta do projeto:

```cd cronograma-educacional-react```

### Backend:
Defina a chave API do Gemini
- entre no [Google AI studio](https://aistudio.google.com/app/api-keys)
- crie uma chave API
- copie sua chave API no arquivo `.env`

Entre na pasta backend usando ```cd backend``` e configure as variaveis de ambiente criando um arquivo `.env` de acordo com o `template.env`.

Rode os seguintes comandos dentro da pasta backend:

```docker-compose up```

```npm i```

```npm start```

Caso não funcione limpe o docker com os comandos:

```docker-compose down```

```docker-compose up```

### Frontend:
Entre no diretório do frontend com o comando ```cd frontend```

Rode os comandos:

```npm i```

```npm run dev```
