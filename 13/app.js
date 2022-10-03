// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let vehicles = ["Suzuki Bike" , "Honda Bike" ,"Corolla"];
show_names(vehicles);

function show_names(nam)
{
    
    for(let i=0; i<nam.length ; i++)
    {
        console.log("I would like to own a  " + nam[i] + '\t');
    }
}


