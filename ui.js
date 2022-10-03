class UI{
  constructor(){
  this.profile = document.getElementById('profile')
  }

  showProfile(user){
    // console.log(user)
    this.profile.innerHTML=`
     <div class="maincontainer">
     <div class="contentone">
     <img class="img" src="${user.avatar_url}">
     <div class="button">
     <a href="${user.html_url}" target="_blank" class="btn">View Profile</a>
     </div>
     </div>
     <div class="contenttwo">
     <div class="badges">
     <span class="Badge bgdark">Public Repos:${user.public_repos}</span>
     <span class="Badge bglight">Public Gists:${user.public_gists}</span>
     
     <span class="Badge bggreen">Followers:${user.followers}</span>
     
     <span class="Badge bgpink">Following:${user.following}</span>
     </div>

     <br><br>
     <ul class="listgroup">
     <li class="listchild">Company:${user.company}</li>
     <li class="listchild">Website/Blog:${user.blog}</li>
     <li class="listchild">Location:${user.location}</li>
     <li class="listchild">Member Since:${user.created_at}</li>
     </ul>

     </div>
     </div>
     <h3 class="thirdheading">Latest Repos</h3>
     <div id="repos"></div>
    `
  }

  Repos(repo){
   let output=""
   repo.forEach(function(repo) {
  output+=`
  <div class="repocontainer">
  <div class="contentrepo">

  
  <a href="${repo.html_url}" target="_blank" >${repo.name}</a>
  
  

  <div class="contenttwo">
  <div class="badgestwo">
  <span class="Badge bgdarks">Stars:${repo.stargazers_count}</span>
  <span class="Badge bglights">Watchers:${repo.watchers_count}</span>
  <span class="Badge bggreens">Forks:${repo.form_count}</span>
  </div>
  </div>

  </div>
  </div>
  `

  
   })
  //  Output Repos
  document.getElementById('repos').innerHTML=output;
  }
}