const today = new Date()
const year = today.getFullYear()
const footer = document.querySelector('.footer-test')

footer.innerHTML = `<p>Github Finder &copy;Nazadev All Rights Reserved ${year}</p>`
// class Github{
//   constructor(){

//   }

//   async getUsers(user){
//   const Response= await fetch(`https://api.github.com/users/${user}`);

//   const profile= await Response.json();

//   return{
//     profile
//   }
//   }
// }
// Init Gitub
const github = new Github;

// Init UI
const ui = new UI;

// Create a variable for the input
const searchUser= document.querySelector('#searchuser');
const error= document.getElementById('error');

// Add an event listener to the variable created
searchUser.addEventListener('keyup',findUser);

// In your event listener function, i want to write out what should happen when that event is being listened for.
function findUser(e){
  // Since it is a value that we are typing into our input, we need to put that value into a variable.
  // console.log(e.target.value)
  const users= e.target.value;

  if(users !==""){
    // console.log(users)
    // Make your http call. Its basically like a phone call to your api that is being fetched in github.js.
  github.getUsers(users)
  .then(data => {
    console.log(data)
    if(data.profile.message==="Not Found"){
      // Show error
      error.style.display= "block"

      setTimeout(function(){
        error.style.display='none'
      }, 3000)
    } else{
      // Show Profile
     ui.showProfile(data.profile)
      ui.Repos(data.repo)
    }
  })
  }else{
    // Clear Profile
  }
}