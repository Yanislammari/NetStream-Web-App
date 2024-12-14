import { BASE_URL } from "../config/API";
import Role from "../models/Role";

export async function login(email: string, password: string): Promise<string> {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    if(response.status === 404) {
      return "User dosent exist !";
    }
    else if(response.status === 401) {
      return "Invalid password !";
    }
    else if(response.status === 500) {
      return "Internal servor error !";
    }

    const data = await response.json();
    return data.token;
  }
  catch(err) {
    return "Internal servor error !";
  }
}

export async function register(email: string, password: string): Promise<string> {
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

    if(response.status === 400) {
      return "Email already exist !";
    }
    else if(response.status === 500) {
      return "Internal servor error !";
    }

    const data = await response.json();
    return data.token;
  }
  catch(err) {
    return "Internal servor error !";
  }
}
