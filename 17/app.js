/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.  */



let persons_list = ["Ali" , "Afzal" ,"Hamza", "Muneeb", "Shahbaz"];
console.log("Sorry, I can invite 2 People on Dinner Party");  //Add a new line that prints a message saying that you can invite only two people for dinner.

//Remove guests from your list one at a time until only two names remain in your list//

let del_person = "";
while(persons_list.length != 2)
{
    del_person = persons_list.pop();
    console.log("Sorry " + del_person +" you cannot be invited to the dinner ");
}


//Print a message to each of the two people still on your list, letting them know they’re still invited.
for(let i=0; i< persons_list.length ;i++)
{
    console.log(persons_list[i] + " ,You are invited to the dinner."); 
}

//Remove the last two names from your list
while(persons_list.length != 0)
{
    persons_list.pop();
}

//Print your list to make sure you actually have an empty list at the end of your program
console.log(persons_list);
