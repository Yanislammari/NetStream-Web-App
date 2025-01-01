import { BASE_URL } from "../config/API";
import Media from "../models/Media";
import MediaType from "../models/MediaType";
import Category from "../models/Category";

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

    if(response.status === 400) {
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

export async function getAllMediaByCategory(category: Category): Promise<Media[] | string> {
  try {
    const response = await fetch(`${BASE_URL}/medias/category/by`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: category
      })
    });

    if(response.status === 400) {
      return "Error in category request !";
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

export async function getMediaById(id: string): Promise<Media | string> {
  try {
    const response = await fetch(`${BASE_URL}/medias/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(response.status === 404) {
      return "Media not found !";
    }
    else if(response.status === 400) {
      return "Invalid Media ID !";
    }
    else if(response.status === 500) {
      return "Internal servor error !";
    }

    const media: Media = await response.json();
    return media;
  }
  catch(err) {
    return "Internal servor error !";
  }
}
