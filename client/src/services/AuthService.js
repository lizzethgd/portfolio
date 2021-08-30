export default {
logIn : async user => {
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
},

logOut : async () => {
  const res = await fetch('auth/signout');
  return await res.json();
},

getAuthentication : async ()=>{
  const res = await fetch('/auth/authenticated');
  if (res.status !== 401)
    return res.json();
  else
    return { isAuthenticated: false, user: { username: "", role: "" } };
},
  
logUp : async user =>{
  const res = await fetch('auth/signup', {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await res.json();
},

getAdmin : async ()=>{
  const res = await fetch('auth/admin');
  if (res.status !== 401) {
    return res.json()
  }

  else
    return { message: { msgBody: "UnAuthorized", msgError: true } };
},
    
}

/* if (res.status !== 401)
      return await res.json().then(data => data);
else
      return { isAuthenticated: false, user: { username: "", role: "" } };
} */