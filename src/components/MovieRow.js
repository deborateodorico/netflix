// import react from "react";
import './MovieRow.css';

function MovieRow({title, items}) {
    console.log(items)
    return(
        <div>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                {items.results?.length > 0 && items.results.map((item, key) => {
                    return (
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="posters" key={key} />
                    );
                })}
            </div>
        </div>
    );
}

export default MovieRow;