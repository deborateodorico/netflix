import React, { useEffect, useState } from "react";
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [feacturedData, setFeacturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // pegando o feactured
      const originals = list.filter(i => i.slug === 'originals');
      const randomChosenFilm = Math.floor(Math.random() * (originals[0].items.results.length -1)); // pegando aleatoriamente o filme
      const chosenFilm = originals[0].items.results[randomChosenFilm]; // filme escolhido
      const chosenInfoFilm = await Tmdb.getMovieInfo(chosenFilm.id, 'tv');
      setFeacturedData(chosenInfoFilm);
    }
    loadAll();
},[])

// para adicionar um evento de monitoramento da própria pagina, ref a barra do header.
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
},[])

  return (
    <div className="pages">
      <Header black={blackHeader}/>
      {feacturedData && 
        <FeaturedMovie item={feacturedData} />
      }
      <section className="lists">
        {movieList.map((item, key) => {
            return <MovieRow key={key} title={item.title} items={item.items}/>
        })}
      </section>
      <footer>
        Feito com <span role="img" aria-label="coração">♥︎</span> por Débora Teodorico<br/>
        Direitos de imagem para Netflix <br/>
        Dados utilizados do site Themoviedb.org
      </footer>
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
        </div>
      }
    </div>
  );
}
export default App;

// para saber a posicao do sroll, usamos o window.scrollY, onde o Y é a vertical.