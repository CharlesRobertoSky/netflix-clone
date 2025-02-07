import React, {use, useEffect, useState} from 'react';
import Tmdb from './db/Tmdb'
import MovieRow from './components/MovieRow/index';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie/index';
import Header from './components/Header/index';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
  
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader (true)
      }else{
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  },[]);
  return (
   <div className="page">

      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData}/> 
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </section>

        <footer>
          Feito com <span role="img" aria-label='coração'>♥️</span> por Code#fff<br/>
          Direitos de imagem para NetFlix<br/>
          Dados pego do site Themoviedb.org
        </footer> 
        
        {movieList.length <= 0 && 
        <div className='loading'>
          <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.motionisland.com%2Fwp-content%2Fuploads%2F2022%2F03%2FLoading_1.gif&f=1&nofb=1&ipt=2a2e269f5b37610510983cf6f91b3baf7c34b2fa055f5b833b408cb8bece6140&ipo=images'/>

        </div>}
   </div>
  );
}
