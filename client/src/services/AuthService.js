export const loginUser = async ( user) => {
  const res = await fetch('auth/signin', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (res.status === 400 || res.status === 401)
    return { isAuthenticated: false, user: { username: "", role: "" } };
  const data = await res.json();
  return data;
}

export const logoutUser = async () => {
  const res = await fetch('auth/signout');
  const data = await res.json();
  return data;
}

export const getAuthentication = async ()=>{
 const res = await fetch('auth/authenticated');
  if (res.status === 401 || res.status === 403 || res.status === 404)
    return { isAuthenticated: false, user: { username: "", role: "" } };
  const data = await res.json();
  return data;
}
  
export const logupUser = async (user) =>{
  const res = await fetch('auth/signup', {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await res.json();
}
    