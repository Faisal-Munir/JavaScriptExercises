// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let mag=["holo","folo","golo"];
mak_great(mag);
show_mag(mag);

function show_mag(arr){
    for(let i=0; i<arr.length ; i++){
        console.log(arr[i])
    }
}

function mak_great(arr){
    for(let i=0; i<arr.length ; i++){
        mag[i]=("The Great " + arr[i])
    }
    
}