/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.sum = () => {
    return this.a + this.b;
  };

  this.mul = () => {
    return this.a * this.b;
  };

  this.sub = () => {
    return this.a - this.b;
  };
  this.div = () => {
    return this.a / this.b;
  };
}

const calculator = new Calculator(90, 45);

console.log("Sum=" + calculator.sum());
console.log("Multiplication=" + calculator.mul());
console.log("Substraction=" + calculator.sub());
console.log("division=" + calculator.div());
