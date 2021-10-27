function showGithubProfile(){
  
  let user = document.getElementById("user").value

  const url = `https://api.github.com/users/${user}`

  fetch(url)
  .then(response => response.json())
  .then(data =>{
    userName.textContent = data.name
    userLocation.textContent = data.location
    userBio.textContent = data.bio
    userImage.src = data.avatar_url
  })


}