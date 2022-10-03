/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.   */


let persons_list = ["Ali" , "Afzal" ,"Hamza"];
show_names(persons_list);

function show_names(nam)
{
    
    for(let i=0; i<nam.length ; i++)
    {
        console.log(nam[i] + " I would like to invite you on a dinner party");
    }
}

console.log("Mr. Ali is NOT COMING to dinner party");

persons_list.shift();
persons_list.unshift("Faisal");
show_names(persons_list);

console.log("I found a bigger dinner table");

persons_list.unshift("Sultan");

let start = 3;
let deleteCount = 0;
persons_list.splice(start, deleteCount, "Muneeb");
persons_list.push("Shahmeer")

console.log("New List of Dinner Members");
show_names(persons_list);