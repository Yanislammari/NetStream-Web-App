import MediaType from "./MediaType";
import Category from "./Category";
import Season from "./Season";

interface Media {
  id: string;
  name: string;
  synopsis: string;
  year: number;
  mediaType: MediaType;
  picture?: string;
  largePicture?: string;
  categories: Category[];
  seasons?: Season[];
  video?: string;
}

export default Media;
