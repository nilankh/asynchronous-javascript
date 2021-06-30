// asynchronous
console.log("Before");

getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repo, (commits) => {
      //   CALLBACK HELL
    });
  });
});

console.log("After");

// Synchronous
console.log("Before");
const user = getUser(1);
const repos = getRepositories(user.gitHubUsername);
const commits = getCommits(repos[0]);
console.log("After");
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
