const fs = require('fs');
const path = require('path');

// Caminhos
const distPath = path.resolve(__dirname, 'dist');
const htaccessPath = path.resolve(__dirname, '.htaccess');
const distHtaccessPath = path.resolve(distPath, '.htaccess');
const robotsPath = path.resolve(__dirname, 'robots.txt');
const distRobotsPath = path.resolve(distPath, 'robots.txt');
const sitemapPath = path.resolve(__dirname, 'sitemap.xml');
const distSitemapPath = path.resolve(distPath, 'sitemap.xml');

console.log('Iniciando procedimentos pós-build...');

// Função para copiar arquivos
function copyFile(source, destination) {
  try {
    if (fs.existsSync(source)) {
      const fileContent = fs.readFileSync(source);
      fs.writeFileSync(destination, fileContent);
      console.log(`✅ Arquivo copiado com sucesso: ${path.basename(source)}`);
    } else {
      console.error(`❌ Arquivo de origem não encontrado: ${source}`);
    }
  } catch (error) {
    console.error(`❌ Erro ao copiar ${source}:`, error);
  }
}

// Verifique se a pasta dist existe
if (!fs.existsSync(distPath)) {
  console.error('❌ A pasta dist não foi encontrada. Certifique-se de executar o build antes do deploy.');
  process.exit(1);
}

// Copiar o arquivo .htaccess
copyFile(htaccessPath, distHtaccessPath);

// Copiar o arquivo robots.txt
copyFile(robotsPath, distRobotsPath);

// Copiar o arquivo sitemap.xml
copyFile(sitemapPath, distSitemapPath);

// Verificar se o index.html existe no dist
const indexPath = path.resolve(distPath, 'index.html');
if (fs.existsSync(indexPath)) {
  console.log('✅ index.html verificado com sucesso');
} else {
  console.error('❌ index.html não encontrado na pasta dist');
}

console.log(`
===================================================
🚀 DEPLOY PREPARADO COM SUCESSO 🚀
===================================================

Seu site está pronto para ser enviado para a Hostinger.
Arquivos preparados na pasta 'dist':

1. Arquivos de aplicação
2. .htaccess
3. robots.txt
4. sitemap.xml

Próximos passos:
1. Faça upload da pasta 'dist' para o diretório raiz da Hostinger
2. Configure o domínio para apontar para o diretório correto
3. Certifique-se de que o SSL está ativado

===================================================
`); 