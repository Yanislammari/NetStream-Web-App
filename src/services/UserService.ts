import { BASE_URL } from "../config/API";
import User from "../models/User";

export async function getUserByToken(token: string): Promise<User | string> {
  try {
    const response = await fetch(`${BASE_URL}/auth`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if(response.status === 404) {
      return "No Token provided !";
    }
    else if(response.status === 401) {
      return "Token not available !";
    }

    const user: User = await response.json();
    return user;
  }
  catch(err) {
    return "Internal servor error !";
  }
}
