const GitHub = require('github-api');
const github = new GitHub({
    apiUrl: "https://serverName/api/v3",
  });
const user = github.getUser(process.argv[2]);
user.listRepos((err, repos)=>{
    console.log(repos.forEach(repo => {
      console.log(repo.full_name)  
    }));
})