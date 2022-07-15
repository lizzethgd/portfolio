export const logIn = async user => {
  const res = await fetch('auth/signin', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status !== 401)
      return res.json();
    else
      return { isAuthenticated: false, user: { username: "", role: "" } };
}

export const logOut = async () => {
  const res = await fetch('auth/signout');
  return await res.json();
}

export const getAuthentication = async () => {
  const res = await fetch('auth/authenticated');
  if (res.status !== 401)
    return res.json();
  else
    return { isAuthenticated: false, user: { username: "", role: "" } };
}
  
export const logUp = async user => {
  const res = await fetch('auth/signup', {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await res.json();
}

export const getAdmin = async () => {
  const res = await fetch('auth/admin');
  if (res.status !== 401) {
    return res.json()
  }

  else
    return { message: { msgBody: "UnAuthorized", msgError: true } };
}
