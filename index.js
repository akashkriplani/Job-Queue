// As of ES 6, the job queue takes priority over callback queue hence the output of the below code is as:

// 4 I will execute first
// 3 hello
// 1
// 2


// Callback queue - task queue
setTimeout(() => console.log('1'));
setTimeout(() => console.log('2'));


// Job queue - microtask queue
Promise.resolve('hello').then(data => {
  console.log('3', data);
})

// JavaScript runtime
console.log('4', 'I will execute first');