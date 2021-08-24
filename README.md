### START DO PROJETO 

**clonar o projeto**
```sh 
git clone https://github.com/augustogehrke/test-zenvia.git
```

**Instalar as dependências do projeto**
```sh 
npm install
```

### PADRÃO DE DESENVOLVIMENTO

O projeto faz uso do eslint com o padrão [Standard](https://standardjs.com/).

**Comando úteis:**

```sh
npm run lint
```
Verifica se todo o projeto está seguindo o padrão definido, caso não, informa quais os problemas encontrados.

```sh 
npm run lint-fix
```
Verifica se todo o projeto está seguindo o padrão definido, caso não, realiza a correção automática do que for possível e informa quais problemas ainda precisam ser resolvidos.

```sh 
npm run start
```

Executa a conversão de um número numérico para romano e ao contrário e exibe no console. OBS: Para alterar os números alterar no arquivo index.js

### TESTES UNITÁRIOS

O projeto possui testes unitários.

**Execução dos testes**

```sh
npm run test
```

**Testes implementados**

**tests/unit/numeric**
* Verifica se converte corretamente para o número 20
* Verifica se converte corretamente para o número 160

**test/unit/roman**
* Verifica se converte corretamente para o romano C
* Verifica se converte corretamente para o romano CCCXXV