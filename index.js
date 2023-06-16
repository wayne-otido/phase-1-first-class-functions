let num1= 2
let num2= 4
function add() {
  let sum = (num1 + num2)
  return sum
}
function receivesAFunction(add) {
  add()
}
function result() {
  console.log(`the sum is ${sum}`)
}
function returnsANamedFunction(){
  return result
}
function returnsAnAnonymousFunction(){
  return function() {
    console.log(`Done`)
  }
}
