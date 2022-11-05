function f() {
  console.log(this); // ?
}
let user = {
  g: f.bind(2),
};
user.g();

//If the function is not in strict mode, null and undefined will be replaced with the global object, and primitive values will be converted to objects.


