// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

car_info("Toyota","2015",{tyre:4,color:"white"})



function car_info(manufacturer1, model1,...obj){
    let car = {
        manufacturer:manufacturer1,
        model:model1 
    };
    for(let y=0;y<obj.length;y++){
        car={...car, ...obj[0]};
    }
console.log(car);

}

