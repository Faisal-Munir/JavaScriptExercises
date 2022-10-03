// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let mag1=[];
let mag=["holo","folo","golo"];

let mag2 = mak_great(mag);
show_mag(mag);
show_mag(mag2);

function show_mag(arr){
    for(let i=0; i<arr.length ; i++){
        console.log(arr[i])
    }
}

function mak_great(arr){
    
    for(let i=0; i<arr.length ; i++){
        mag1.push("The Great " + arr[i]);
    }
    
    return mag1;
}