import { BASE_URL } from "../config/API";
import Media from "../models/Media";
import MediaType from "../models/MediaType";

export async function getAllMedias(): Promise<Media[] | string> {
  try {
    const response = await fetch(`${BASE_URL}/medias` , {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(response.status === 500) {
      return "Internal servor error !";
    }

    const medias: Media[] = await response.json();
    return medias;
  }
  catch(err) {
    return "Internal servor error !";
  }
}

export async function getAllMediasByMediaType(mediaType: MediaType): Promise<Media[] | string> {
  try {
    let mediaTypeParams = "";
    
    switch(mediaType) {
      case MediaType.Movie: {
        mediaTypeParams = "movies";
        break;
      }
      case MediaType.Series: {
        mediaTypeParams = "series";
        break;
      }
      case MediaType.Episode: {
        mediaTypeParams = "Episode";
        break;
      }
      default: {
        return "Invalid MediaType !";
      }
    }

    const response = await fetch(`${BASE_URL}/medias/type/${mediaTypeParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }, 
    });

    if(response.status === 404) {
      return "Invalid MediaType !";
    }
    else if(response.status === 500) {
      return "Internal servor error !";
    }

    const medias: Media[] = await response.json();
    return medias;
  }
  catch(err) {
    return "Internal servor error !";
  }
}
