import { api } from "../../config";

export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch(`${api.url}/users/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function loginUser(userData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${api.url}/users/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        let error = await response.json();
        reject(error);
      }
    } catch (error) {
      reject({ error });
    }
  });
}
