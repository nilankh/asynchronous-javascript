// callbacks
// a callback is a function that we are going to call when the result of asynchronous operation is ready.
console.log("Before");
// getUser(1, function(user){
//     console.log('User', user);
// });
// same above you can write in arrow function
getUser(1, (user) => {
  console.log("User", user);

  //   get the repositories
  getRepositories(user.gitHubUsername, (repos) => {
    console.log("Repos", repos);
  });
});

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
