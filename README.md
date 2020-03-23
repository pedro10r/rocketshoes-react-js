## Rocketshoes
## Como rodar a aplicação na sua máquina
### Depois de baixar/clonar a aplicação no diretório, execute:
`yarn install` ou `npm install` Esse comando irá baixar todas as dependêcias da aplicação.

### Rodando API
Dentro do diretório da aplicação primeiro execute `json-server server.json -p 3333` Esse comando irá executar a aplicação deixando a api em execução na sua maquina.

### Rodando interface da aplicação
Abra uma nova aba do terminal dentro do diretório da aplicação e execute `yarn start` Esse comando irá executar a aplicação te levando para seu navegador e o sistema estará funcionando. Lembrando que para vizualizar os produtos o BackEnd precisa estar sendo executado.

## Fluxo Redux
O componente dispara uma `action`, a `action` avisa o `reducer`, o `reducer` faz as alterações que ele precisa e depois o `REDUX` avisa todos os componenes que precisam daquela nova informação para que eles então se atualizem com essa nova informação.