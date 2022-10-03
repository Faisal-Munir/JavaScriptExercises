// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


let Person_name= "\tFaisal Munir\n";
console.log(Person_name);

stipping_name(Person_name);



function stipping_name(in_string)
{
    let out_string="";
    let i=0;

    while(in_string[i]!='\n') 
    {
        out_string=out_string + in_string[i+1];
        i++;

    }  
    console.log(out_string);
}
