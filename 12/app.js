// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names = ["Humza" , "Ali" ,"Saqlain"];
show_names(names);

function show_names(nam)
{
    
    for(let i=0; i<nam.length ; i++)
    {
        console.log("Hi " + nam[i] + '\t');
    }
}