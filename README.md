![Image](https://github.com/user-attachments/assets/b6372cc8-2766-439f-8c88-d741eae766b9)
> MVP de uma aplicação web em React que gera automaticamente - com o uso de IA - um cronograma de estudos e tarefas para estudantes
## O projeto
Este projeto foi desenvolvido na disciplina de Experiência Criativa, da PUCPR, na qual foram explorados os conceitos do Design Thinking. Utilizando-se desta técnica, nós deveríamos achar uma "dor" para ser resolvida, e, ao final, entregar um MVP do produto, que é esta aplicação web.

Como o foco principal era praticar o Design Thinking, o tempo para a produção do MVP em si era curto e os alunos deste grupo aproveitaram a oportunidade para testar tecnologias novas, com as quais não tinham familiaridade, ou se colocaram em situações nas quais não possuíam tanta experiência (como quem geralmente fazia frontend, fazendo backend e vice-versa), a fim de utilizá-lo também como laboratório de aprendizado. E, por isso, é importante ressaltar que, apesar de funcionar e cumprir com os objetivos, a qualidade de código e organização de arquivos no geral está muito aquém da ideal.

### Como funciona o Beezer?
O Beezer nasceu de uma dor comum a qualquer estudante: muitas atividades a serem feitas, e pouco tempo para realizá-las. E o que os estudantes costumam fazer? Deixar para estudar tudo na última hora, o que é cientificamente comprovado que é ineficiente para reter os conhecimentos adquiridos nas disciplinas cursadas. 

Como o Beezer resolve este problema? 
- O estudante adiciona as disciplinas que precisa estudar, de maneira muito fácil: ele adiciona os planos de ensino de cada uma, e a aplicação gera uma lista de atividades (provas e trabalhos, com datas) que ele precisará fazer de cada uma.
- Em seguida, o estudante marca as horas que tem livres para estudar, e a aplicação gera automaticamente um cronograma que utiliza as atividades de cada disciplina e os tempos de estudo para que o estudante consiga realizar todas as atividades que precisa sem se sobrecarregar e deixar pra última hora, garantindo uma melhor qualidade e retenção do seu aprendizado.

### Logo, nome e mascote
Tanto o nome, como o mascote (desenhos e animações) foram todos desenvolvidos pelos alunos da equipe, sem a utilização de IAs de qualquer tipo.

### Prints da aplicação

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/6d3a8973-beae-4a46-8ce4-d97f782ffcc7" />

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/f6f7fa7b-c929-4fc1-8ac1-19c4571fdcad" />

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/da40d87f-fa94-40a7-b433-99dfb5330eb4" />

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/82a1c8ba-0a4d-4898-9d92-0e707247595c" />

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/8025e36f-aab0-4a83-818b-a720e3865fb6" />

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/43a73e46-987e-46e7-a105-0fdc4e1c4faf" />

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/b7384bc1-4af9-4fd1-a866-fda753ef7343" />

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/c5bc1972-185f-4385-93c0-0b225507cec5" />

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/6f715ba7-64c7-4f6b-908b-99d526ee1077" />

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/1ea84aed-a723-4b20-99db-a0d72080f700" />

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/8ea33e91-2a3a-476a-8b40-dd2da167d974" />

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/1b7a90b9-6373-40e2-ac88-e590796c9750" />

<img width="1836" height="954" alt="Image" src="https://github.com/user-attachments/assets/e3abd0e8-31a8-46cc-831b-542edb970f19" />



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
