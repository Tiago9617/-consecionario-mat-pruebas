/* hola putines*/
const username = 'tiagorc';
const sum = (a: number, b: number) => {

  return a + b;

}

sum(1, 10);

class Person {
  /*age: number;
  lasname: string;

  constructor(age: number, lastname: string){
    this.age = age;
    this.lasname = lastname;


  }*/

  constructor(public age: number, public lastname: string){}
}

const santiago = new Person(27, 'Rojas Colunge');
santiago.age;
