const API_SECRET = "4df254304810a27310241d0aa57f464e";
const API_BASE = "https://api.themoviedb.org/3";


const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async() => {
    return [ 
      {
        slug : 'originals',
        title : 'Originais do Netflix',
        items : await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_SECRET}`)
      },
      {
        slug : 'trending',
        title : 'Recomendados para você!',
        items : await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_SECRET}`)
      },
      {
        slug : 'toprated',
        title : 'Em Alta',
        items : await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_SECRET}`)
      },
      {
        slug : 'action',
        title : 'Ação',
        items : await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_SECRET}`)
      },
      {
        slug : 'comedy',
        title : 'Comedia',
        items : await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_SECRET}`)
      },
      {
        slug : 'horror',
        title : 'Terror',
        items : await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_SECRET}`)
      },
      {
        slug : 'romance',
        title : 'romance',
        items : await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_SECRET}`)
      },
      {
        slug : 'documentary',
        title : 'Documentários',
        items : await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_SECRET}`)
      },
    ]
  },
  getMovieInfo: async (movieId, type) => {
    let info = {}

    if(movieId){
      switch(type){
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_SECRET}`)
        break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_SECRET}`)
        break
        default:
          info = null
        break

      }
    }
    return info
  }
};
