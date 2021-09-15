import { Button } from "./Button";

interface GenreResponse {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string; 
}
interface SideBarProps {
  genero: GenreResponse[]
  genID: number;
  handleClick(id: number): void;
}

export function SideBar({genero, genID, handleClick}: SideBarProps) {
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genero.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClick(genre.id)}
          selected={genID === genre.id}
        />
      ))}
    </div>

  </nav>
}