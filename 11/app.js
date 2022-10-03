// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names = ["Humza" , "Ali" ,"Saqlain"];
show_names(names);

function show_names(nam)
{
    
    for(let i=0; i<nam.length ; i++)
    {
        console.log(nam[i] + '\t');
    }
}
