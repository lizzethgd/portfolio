export default {
logIn : async user => {
  const res = await fetch('auth/signin', {
    method: 'POST',
    body: JSON.stringify(user),
    headers : {
      'Content-Type' : 'application/json'
  }
}).then(res => {
  if(res.status !== 401)
  {console.log('hay un error aqui')
       res.json().then(data => data);}
  else
      return { isAuthenticated : false, user : {username : "",role : ""}};
})
},

logOut : async () => {
  const res = await fetch('auth/signout');
  const data = await res.json();
  return data;
},

getAuthentication : async ()=>{
  return fetch('/auth/authenticated')
  .then(res=>{
      if(res.status !== 401)
          return res.json().then(data => data);
      else
          return { isAuthenticated : false, user : {username : "",role : ""}};
  });
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
getAdmin : ()=>{
  return fetch('auth/admin')
          .then(response=>{
              if(response.status !== 401){
                  return response.json().then(data => data);
              }
              else
                  return {message : {msgBody : "UnAuthorized",msgError : true}};
          });
},
    
}