import { BASE_URL } from "../config/API";
import Role from "../models/Role";

export async function register(email: string, password: string): Promise<string | null> {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        role: Role.User
      })
    });

    const data = await response.json();
    return data.token;
  }
  catch(err) {
    return null;
  }
}
