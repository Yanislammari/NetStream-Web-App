import Media from "./Media";

interface Season {
  id: string;
  numero: number;
  synopsis: string;
  year: number;
  episodes: Media[];
}

export default Season;
