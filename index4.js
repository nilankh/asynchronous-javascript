// solution for resolving callback hell problem
// Named function to resue
console.log("Before");

getUser(1, getRepositories);

console.log("After");

function getRepositories(user){
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
  getCommits(repos, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database...");

    callback({ id: id, gitHubUsername: "Nilank Nikhil" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling Github API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
