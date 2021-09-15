import { MovieCard } from "./MovieCard";

interface ContentFilmes {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;  
  }>;
  Runtime: string;
}
interface ContentProps {
  tituloGenero: string;
  filmes: ContentFilmes[]; 
}

export function Content({ tituloGenero, filmes }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {tituloGenero}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {filmes.map(filme => (
            <MovieCard key ={filme.imdbID} title={filme.Title} poster={filme.Poster} runtime={filme.Runtime} rating={filme.Ratings[0].Value} />
          ))}
        </div>
      </main>
   </div>
  )
}