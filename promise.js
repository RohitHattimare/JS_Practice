new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 1000 * 60 * 2);
})
  .finally(() => console.log("Promise ready")) // triggers first
  .then((result) => console.log(result)); // <-- .then shows "value"
