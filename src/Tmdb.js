const API_KEY = '7eadf8c508fb2b290f94eff49601bd7c';
const API_BASE = 'https://api.themoviedb.org/3';

/*
É NECESSÁRIO:
- Os originais da netflix;
- Recomendados (trending); 
- Em alta (top rated);
- Ação
- Comédia
- Terror
- Romance 
- Documentário
*/

const basicFetch = async (endpoint) => {
    const apiNetflix = await fetch(`${API_BASE}${endpoint}`);
    const json = await apiNetflix.json();
    return json;
};

const TmdbApiFuncions = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do netflix',
                items: await basicFetch(`/discovery/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch( `/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99?language=pt-BR&api_key=${API_KEY}`),
            }
        ]
    }
}

export default TmdbApiFuncions;
