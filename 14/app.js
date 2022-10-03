// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


let persons_list = ["Ali" , "Afzal" ,"Hamza"];
show_names(persons_list);

function show_names(nam)
{
    
    for(let i=0; i<nam.length ; i++)
    {
        console.log(nam[i] + " I would like to invite you on a dinner party");
    }
}