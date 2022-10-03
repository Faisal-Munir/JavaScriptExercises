// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let mag=["holo","folo","golo"];
show_mag(mag);

function show_mag(arr){
    for(let i=0; i<arr.length ; i++){
        console.log(arr[i])
    }
}