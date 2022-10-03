/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order. */

let org_loactions= ["Pakistan","Malaysia","Azerbaijan", "Turkey" , "Saudia"];
let Locations=[];
for(let i=0; i<org_loactions.length ; i++)
{
     Locations[i] = org_loactions[i]; 
}

// • Print your array in its original order.

console.log(org_loactions);

//• Print your array in alphabetical order without modifying the actual list.

console.log(Locations.sort());

//• Show that your array is still in its original order by printing it.

console.log(org_loactions);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(Locations.reverse());

// • Show that your array is still in its original order by printing it again.
console.log(org_loactions);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(org_loactions.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(org_loactions.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(org_loactions.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*
console.log(org_loactions.reverse());

