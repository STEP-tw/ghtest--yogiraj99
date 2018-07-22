var GitHub = require('github-api');
var github = new GitHub({
    apiUrl: "https://serverName/api/v3",
  });
var user = github.getUser(process.argv[2]);
user.listRepos((err, repos)=>{
    console.log(repos.forEach(repo => {
      console.log(repo.full_name)  
    }));
})