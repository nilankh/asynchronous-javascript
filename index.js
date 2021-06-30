console.log('Before');
console.log('After');
// This is an exmaple of synchronous and blocking programming

console.log('Before');
setInterval(() => {
    console.log('Reading a user from a database...')
}, 2000);
console.log('After');