export const logIn = async ( user) => {
  const res = await fetch('auth/signin', {
    method: 'POST',
    body: JSON.stringify(user),
    headers : {
      'Content-Type' : 'application/json'
  }
}).then(res => {
  if(res.status !== 401)
      return res.json().then(data => data);
  else
      return { isAuthenticated : false, user : {username : "",role : ""}};
})
}

export const logOut = async () => {
  const res = await fetch('auth/signout');
  const data = await res.json();
  return data;
}

export const getAuthentication = async ()=>{
 const res = await fetch('auth/authenticated');
   if (res.status === 401  || res.status === 403)
    return { isAuthenticated: false, user: { username: "", role: "", message: res.status } };
  const data = await res.json();
  return data;
}
  
export const logUp = async (user) =>{
  const res = await fetch('auth/signup', {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await res.json();
}
    
