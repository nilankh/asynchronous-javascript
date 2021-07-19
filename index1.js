console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');
// there are 3 patterns to deal with aynchronous code: callbacks, prmoise, async/await
function getUser(id) {
  setTimeout(() => {
    console.log('Reading a user from database...');
    return { id: id, gitHubUsername: 'Nilank Nikhil' };
  }, 2000);
  return 1;
}
