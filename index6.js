// Replacing callback with promises

console.log("Before");
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repo, (commits) => {
      //   CALLBACK HELL
    });
  });
});
console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      console.log("Reading a user from database...");
      resolve({ id: id, gitHubUsername: "Nilank Nikhil" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      console.log("Calling Github API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      console.log("Calling Github API...");
      resolve(["COMMIT"]);
    }, 2000);
  });
}
