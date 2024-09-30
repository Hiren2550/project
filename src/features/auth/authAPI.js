export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://192.168.1.77:3000/api/users/register",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}
export function loginUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://192.168.1.77:3000/api/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });
    const data = await response.json();
    resolve({ data });
  });
}
