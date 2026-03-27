import fs from 'fs/promises';
import chalk from 'chalk';

async function executarAtividade() {
    const nomePasta = './storage';
    const caminhoArquivo = `${nomePasta}/aula05.txt`;
    const conteudo = 'Aula 05 - Manipulação de arquivos com Node.js.\n\nArquivo criado com sucesso durante a atividade final.';

    try {
        console.log(chalk.blue('Iniciando a atividade...'));

        await fs.mkdir(nomePasta, { recursive: true });
        console.log(chalk.yellow('Verificando/Criando a pasta "storage"...'));

        await fs.writeFile(caminhoArquivo, conteudo);
        console.log(chalk.green('Arquivo "aula05.txt" gerado com sucesso!'));

        console.log(chalk.blue('Lendo o conteúdo do arquivo...'));
        const dados = await fs.readFile(caminhoArquivo, 'utf8');

        console.log(chalk.cyan('--- Conteúdo do Arquivo ---'));
        console.log(dados);
        console.log(chalk.cyan('---------------------------'));

        console.log(chalk.black.bgGreen(' Atividade finalizada com sucesso! '));

    } catch (erro) {
        console.error(chalk.red('Ocorreu um erro durante a execução:'), erro);
    }
}

executarAtividade();