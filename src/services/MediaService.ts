import { BASE_URL } from "../config/API";
import Media from "../models/Media";

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
