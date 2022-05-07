/* The sampling function is different than throttling as throttling limits the execution of
 the function once in a given amount of time while sampling limits the execution by executing function 
 once in a given number of calls. */

// orginal solution 
function sampler(fn, count, context){
    let counter = 0;

    return function(...args){
        // set the counters
        let lastArgs = args;
        context = this ?? context;
        
        // invoke only when number of calls is equal to the counts
        if(++counter !== count) return;
        
        fn.apply(context, args);
        counter = 0;
    };
}

function message(){
    console.log("hello");
  }
  
  const sample = sampler(message, 4);
  sample();
  sample();
  sample();
  sample(); // hello
  sample();
  sample();
  sample();
  sample(); // hello

// My tried solution
function samplingFunction(fn, k) {
  let count = 0;
  return function () {
    count += 1;
    if (count === k) {
      count = 0;
      fn();
    }
  };
}

let sampler = samplingFunction((t) => console.log(t), 3);
sampler();
sampler();
sampler();
