# DW - Aula 05: Manipulação de Arquivos com Node.js

## Descrição do Projeto

Este projeto é uma atividade prática da disciplina de Desenvolvimento Web (DW), especificamente a Aula 05, focada na manipulação de arquivos utilizando Node.js. O objetivo é demonstrar como criar, escrever e ler arquivos de forma assíncrona, utilizando o módulo `fs/promises` do Node.js.

## Funcionalidades

O projeto executa as seguintes operações:

1. **Criação de Diretório**: Verifica e cria a pasta `storage` se ela não existir.
2. **Escrita de Arquivo**: Cria o arquivo `aula05.txt` dentro da pasta `storage` com conteúdo específico sobre a aula.
3. **Leitura de Arquivo**: Lê o conteúdo do arquivo criado e exibe no console.
4. **Tratamento de Erros**: Implementa tratamento de erros para operações de I/O.
5. **Interface Colorida**: Utiliza a biblioteca `chalk` para colorir as mensagens no console, melhorando a experiência do usuário.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **fs/promises**: Módulo do Node.js para operações assíncronas de sistema de arquivos.
- **chalk**: Biblioteca para estilizar texto no terminal.

## Estrutura do Projeto

```
DW-Aula05/
├── index.js          # Arquivo principal com a lógica da aplicação
├── package.json      # Arquivo de configuração do projeto Node.js
├── storage/          # Pasta criada dinamicamente
│   └── aula05.txt    # Arquivo gerado durante a execução
└── README.md         # Este arquivo
```

## Análise Detalhada do Código (index.js)

### Visão Geral do Arquivo

O arquivo `index.js` é o coração da aplicação. Ele contém uma função assíncrona que demonstra manipulação completa de arquivos usando Node.js. Vamos analisar cada parte do código:

### Imports e Dependências

```javascript
import fs from 'fs/promises';
import chalk from 'chalk';
```

- **`fs/promises`**: Módulo do Node.js para operações assíncronas de sistema de arquivos. A versão promises-based permite usar `async/await` em vez de callbacks.
- **`chalk`**: Biblioteca para colorir texto no terminal, melhorando a legibilidade das mensagens.

### Função Principal: `executarAtividade()`

Esta é uma função assíncrona que executa toda a lógica da atividade:

```javascript
async function executarAtividade() {
    // ... código da função
}
```

#### Variáveis Iniciais

```javascript
const nomePasta = './storage';
const caminhoArquivo = `${nomePasta}/aula05.txt`;
const conteudo = 'Aula 05 - Manipulação de arquivos com Node.js.\n\nArquivo criado com sucesso durante a atividade final.';
```

- **`nomePasta`**: Define o nome da pasta a ser criada.
- **`caminhoArquivo`**: Caminho completo do arquivo a ser criado.
- **`conteudo`**: Texto que será escrito no arquivo.

#### Operações de Sistema de Arquivos

1. **Criação do Diretório**:
   ```javascript
   await fs.mkdir(nomePasta, { recursive: true });
   ```
   - Cria a pasta `storage` se ela não existir.
   - O parâmetro `recursive: true` permite criar diretórios aninhados.

2. **Escrita do Arquivo**:
   ```javascript
   await fs.writeFile(caminhoArquivo, conteudo);
   ```
   - Escreve o conteúdo definido na variável `conteudo` no arquivo.
   - Se o arquivo não existir, ele será criado.

3. **Leitura do Arquivo**:
   ```javascript
   const dados = await fs.readFile(caminhoArquivo, 'utf8');
   ```
   - Lê o conteúdo do arquivo recém-criado.
   - O parâmetro `'utf8'` especifica a codificação de caracteres.

#### Tratamento de Erros

```javascript
try {
    // ... operações
} catch (erro) {
    console.error(chalk.red('Ocorreu um erro durante a execução:'), erro);
}
```

- Qualquer erro durante as operações de I/O é capturado e exibido em vermelho.

#### Interface com o Usuário

O código utiliza `chalk` para colorir diferentes tipos de mensagens:
- `chalk.blue()`: Para mensagens informativas gerais
- `chalk.yellow()`: Para ações em andamento
- `chalk.green()`: Para confirmações de sucesso
- `chalk.cyan()`: Para destacar conteúdo do arquivo
- `chalk.red()`: Para erros
- `chalk.black.bgGreen()`: Para mensagem final de sucesso
### Execução da Função

```javascript
executarAtividade();
```

A função é chamada no final do arquivo para iniciar a execução quando o script é rodado.

### Fluxo de Execução

1. **Inicialização**: Mensagem de início da atividade
2. **Criação de Diretório**: Verificação/criação da pasta storage
3. **Escrita**: Criação e preenchimento do arquivo aula05.txt
4. **Leitura**: Leitura e exibição do conteúdo do arquivo
5. **Finalização**: Mensagem de conclusão bem-sucedida

Este código demonstra boas práticas de programação assíncrona, tratamento de erros e interação com o sistema de arquivos em Node.js.

## Como Executar

### Pré-requisitos

- Node.js instalado (versão 14 ou superior recomendada)
- npm (geralmente vem com o Node.js)

### Instalação

1. Clone ou baixe este repositório.
2. Navegue até a pasta do projeto:
   ```
   cd DW-Aula05
   ```
3. Instale as dependências:
   ```
   npm install
   ```

### Execução

Execute o projeto com o comando:
```
npm start
```

Ou diretamente com Node.js:
```
node index.js
```

## Saída Esperada

Ao executar o programa, você verá no console:

```
Iniciando a atividade...
Verificando/Criando a pasta "storage"...
Arquivo "aula05.txt" gerado com sucesso!
Lendo o conteúdo do arquivo...
--- Conteúdo do Arquivo ---
Aula 05 - Manipulação de arquivos com Node.js.

Arquivo criado com sucesso durante a atividade final.
---------------------------
 Atividade finalizada com sucesso!
```

## Conteúdo do Arquivo Gerado

O arquivo `storage/aula05.txt` contém:
```
Aula 05 - Manipulação de arquivos com Node.js.

Arquivo criado com sucesso durante a atividade final.
```

## Conceitos Aprendidos

Esta atividade aborda os seguintes conceitos importantes:

- **Programação Assíncrona**: Uso de `async/await` para operações não-bloqueantes.
- **Sistema de Arquivos**: Manipulação de arquivos e diretórios com Node.js.
- **Tratamento de Erros**: Implementação de blocos `try/catch` para lidar com exceções.
- **Módulos ES6**: Importação de módulos usando sintaxe moderna (`import`).
- **Bibliotecas Externas**: Integração de pacotes npm para melhorar a UX.

## Autor

Sirlande Martins - Atividade da disciplina de Desenvolvimento Web

## Licença

Este projeto é parte de uma atividade acadêmica e está sob a licença ISC.