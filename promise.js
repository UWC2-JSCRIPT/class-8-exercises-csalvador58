let myPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let randomNum = Math.random();

    console.log(`Random number: ${randomNum}`);

    randomNum > 0.5 ? resolve('Success') : reject('Fail');
    
    console.log('Complete')
  }, 1000);
});

myPromise.then(message => {
    console.log(message);
  }).catch(message => {
    console.log(message);
  });

