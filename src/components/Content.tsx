import { MovieCard } from "./MovieCard";
interface ContentProps {
  tituloGenero: string;
  filmes: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
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