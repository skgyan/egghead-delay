Lets say we have a requirement to run a function after 1s, then 2s, then 3s. 

A quick way to write the run function is using  setTimeout. 

It takes a callback. Sets up our settimeout to call it after 1s. And then we repeat this pattern for 2s and 3s. 

Next we simply pass in a callback that logs the time when it gets called.

```ts
const run = (cb) => {
  setTimeout(() => {
    cb('1s');
    setTimeout(() => {
      cb('2s');
      setTimeout(() => {
        cb('3s');
      }, 1000);
    }, 1000);
  }, 1000);
}

run((time)=>console.log(time));
```

This code does satisfy our requirement but you can see that the nesting adds a lot of noise that makes the intent slightly difficult to figure out. We can make this much easier with async/await. 

The only thing we need is a promise based dealy function, and that is very easy to write. It simply takes a number of `ms` and returns a Promise that gets resolved using setTimeout after the given number of ms

```
const delay = (ms) => new Promise(res => setTimeout(res, ms));
```

Now we can create our `runAsync` function which is now an `async` function which is still going to take the callback like before. 

```
const runAsync = async (cb) => {
 
}
```

And inside the function we now get to use `await` to pause function execution till setTimeout resolves the promise

```
  await delay(1000);
```

and then we call the callback passing in the time 

```
cb('1s');
```

And we repeat this twice more, simply changing the argument to the callback. Now if we run this passin in the same callback is before, 

```
runAsync((time) => console.log(time));
```

you can see that it behaves the same way. Its just more easier to read.

