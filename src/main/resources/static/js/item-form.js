
 const login = (username,password) => {
    // let usernameStr= encodeURIComponent(username);
    // let passwordStr= encodeURIComponent(password);
  const response = fetch(`http://localhost:8080/login?username=${username}&password=${password}`,{
      method: 'POST',
      headers: {
          'Content-Type':'application/json',
      },
      mode: 'no-cors'
      })
      .then (res => {
        res.body})
        .then (data => 
          console.log(data))
        .catch((error) => {
      console.error('Error:', error);
  });
    //  const response = fetch(`http://localhost:8080/login?username=${username}&password=${password}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    //  })
    //  .then(res => {
    //   return res.json()})
    //  .then(data => console.log(data))
}

export default login;
