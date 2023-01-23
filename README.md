## **Como iniciar o projeto via Docker ou localmente**
<br />
O projeto utiliza as portas (3015 e 5173) garanta que essas portas não estejam em uso antes de iniciar.
<br />
Entre na pasta raiz do projeto `./desafio-atual`:
<br />

```sh
cd desafio-atual
```

<br />
Para iniciar a aplicação localmente utilize os seguintes comandos em terminais separados:
<br />
Obs: Sera necessário ter instalado o Node.js na versão 16
<br />

```sh
npm run pre:start
npm run server
npm run web
```

Esses comandos irá instalar as dependências de todo o `server` e da aplicação `web`, em seguida ira inicializar o Back-end e o Front-end da aplicação.
<br /><br />

## **Pagina Web**

A página web irá rodar na `porta 5173` da sua máquina (http://localhost:5173/).
<br /><br />

## **API**

A API ira utilizar a `porta 3015` da sua máquina (http://localhost:3015/).
<br />