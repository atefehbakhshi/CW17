const debounce = (func, delay) => {
  let holder; //to save the first state of input

  let debounceTimer;
  return function (y) {
    if (holder !== y) {
      clearTimeout(debounceTimer);
    }
    holder = y;
    debounceTimer = setTimeout(() => func(y), delay);
  };
};
let f = debounce(alert, 1000);
f("a");
setTimeout(() => f("c"), 200);
setTimeout(() => f("c"), 500);
