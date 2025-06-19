let key=prompt("enter a  key you want to set")
let value=prompt("enter a value you want to set")

localStorage.setItem(key,value)

console.log(`the value of ${key} is ${localStorage.getItem(key)}`)
 