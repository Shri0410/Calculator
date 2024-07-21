let a = parseInt(prompt("enter your first value of a"));
let b = parseInt(prompt("enter the value of b"));
let oper = prompt("choose your operator ");

switch (oper) {
  case "+":
    result = a + b;
    console.log(result);
    break;

  case "-":
    result = a - b;
    console.log(result);
    break;

  case "*":
    result = a * b;
    console.log(result);
    break;

  case "/":
    result = a / b;
    console.log(result);
    break;

  default:
    console.log("enter the valid operator");
}
