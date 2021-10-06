import react, { useState } from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function MovieRow({title, items}) {
  const [scrollX, setScrollX] = useState(0);

  // para empurrar a lista para a esquerda a margem sempre tem que ser negativa.
  const handleLeftArrow = () => {
    let scrollValueLeft = scrollX + Math.round(window.innerWidth / 2); // para definir o numero baseado no tamanho da tela do usuário(metade da tela nesse caso)
    if (scrollValueLeft > 0) {
      scrollValueLeft = 0; // o scroll so vai até chegar em zero, que é o filme inicial
    }
    setScrollX(scrollValueLeft);
  };

  const handleRigthArrow = () => {
    let scrollValueRigth = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 200;
    if (window.innerWidth - listWidth > scrollValueRigth) {
      scrollValueRigth = (window.innerWidth - listWidth) - 60; // subtrai de 60 para respeitar o padding de 30px de cada lado
    }
    setScrollX(scrollValueRigth)
  };

  return(
    <div className="movierow">
      <h2>{title}</h2>
    <div className="movierow--left" onClick={handleLeftArrow}>
    <NavigateBeforeIcon style={{fontSize: 50}}/>
    </div>
    <div className="movierow--rigth" onClick={handleRigthArrow}>
      <NavigateNextIcon style={{fontSize: 50}}/>
    </div>
      <div className="movierow--listarea">
        <div className="movierow--list" style={{
          marginLeft: scrollX,
          width: items.results.length * 200
        }}>
          {items.results?.length > 0 && items.results.map((item, key) => {
            return (
              <div key={key} className="movierow--item">
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="posters" key={key} />
              </div>
              );
            })}
        </div>
        </div>
    </div>
  );
} 

export default MovieRow;
