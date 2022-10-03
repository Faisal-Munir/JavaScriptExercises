/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.  */


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
