class Github{
  constructor(){
  this.repos_count=5;
  this.sort="created:asc"
  this.key="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"
  }

  async getUsers(user){
  const response= await fetch(`https://api.github.com/users/${user}?key${this.key}`);
  const Reporesponse= await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}& sort=${this.sort}`);

  const profile= await response.json();
  const repo= await Reporesponse.json();

  return{
    profile,
    repo

  }
  }
}
