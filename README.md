# Reencontrando Jesus: site

Site de uma página só, em HTML, CSS e um pouco de JavaScript (apenas para mostrar a última postagem do blog).

## Arquivos

- `index.html`: o conteúdo da página (textos, seções, links)
- `style.css`: cores, fontes e layout
- `script.js`: busca a última postagem do blog
- `images/`: capa do livro e foto da autora

## Publicar no GitHub Pages (pelo navegador, sem instalar nada)

1. Entre em github.com e clique em **New repository**.
2. Dê um nome (por exemplo `reencontrandojesus`), deixe **Public** e clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file**.
4. Arraste para lá **todos os arquivos desta pasta**: `index.html`, `style.css`, `script.js` e a pasta `images`. Clique em **Commit changes**.
5. Vá em **Settings → Pages**.
6. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch **main** e a pasta **/ (root)**, e clique em **Save**.
7. Aguarde 1 a 2 minutos. O endereço aparece no topo da mesma página, no formato `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Para atualizar o site depois: abra o arquivo no GitHub, clique no lápis (Edit), altere e clique em **Commit changes**. O site se atualiza sozinho.

## Como colocar a imagem de Jesus

1. Envie a foto para a pasta `images` com o nome `jesus.jpg`.
2. No `index.html`, procure por `Espaço para a imagem de Jesus` e troque o conteúdo de dentro de `<div class="frame">` por:
   `<img src="images/jesus.jpg" alt="Jesus">`

Dica: use uma imagem em retrato (proporção 4:5) e com menos de 500 KB, para o site carregar rápido.

## Como trocar os textos

- Texto de abertura: `index.html`, dentro de `<div class="intro">`.
- Segundo texto (abaixo da imagem): `index.html`, dentro de `<div class="below">`.

## Última postagem do blog

O `script.js` lê o feed público do blog (`blogreencontrandojesus.blogspot.com`) a cada visita. Se o feed não responder, o card da capa continua funcionando como um link para o blog.
