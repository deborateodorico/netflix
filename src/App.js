import React, { useEffect, useState } from "react";
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';

function App() {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }
        loadAll();
    },[])
    return (
        <div className="pages">
            <section className="lists">
                {movieList.map((item, key) => {
                    return <MovieRow key={key} title={item.title} items={item.items}/>
                })}
            </section>
        </div>
    );
}
export default App;