// Exemplo de solicitação à API fictícia de notícias
const apiKey = 'sua-chave-de-api';
const apiUrl = 'https://api.example.com/news';

// Fazendo a solicitação à API
fetch(`${apiUrl}?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // Processando os dados da API e exibindo as notícias no seu site
        const noticias = data.articles;
        noticias.forEach(noticia => {
            const titulo = noticia.title;
            const link = noticia.url;
            // Renderize as notícias no seu site
        });
    })
    .catch(error => {
        console.error('Erro ao buscar notícias da API: ', error);
    });