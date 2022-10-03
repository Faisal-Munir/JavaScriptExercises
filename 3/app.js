// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let Person="Faisal";

console.log (Person.toLowerCase()); //for lower Case
console.log (Person.toUpperCase()); //for Upper Case
//console.log (Person.toCase()); //for Title Case

let Person2="Faisal munir awan pakistan";
let person1= titleCase(Person2);
console.log(person1);

function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 document.write(sentence.join(" "));
 return sentence;
 }

