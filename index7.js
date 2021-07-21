const promise = Promise.resolve({ id: 1 });
promise.then((result) => console.log(result));





const promise1 = Promise.reject(new Error('Reason for rejection...'));
promise1.catch((error) => console.log(error));
