// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.
let cur_users=["ali","faisal","adil","umer","fahad"];
for(let j=0; j<cur_users.length; j++){
    cur_users[j]=cur_users[j].toLowerCase();
}

console.log(cur_users);
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let nw_users=["ALI","usman","fahad","summer","aaliyan"];
for(j=0; j<nw_users.length; j++){
    nw_users[j]=nw_users[j].toLowerCase();
}

console.log(nw_users);
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

for(let i=0; i<nw_users.length ;i++){
    if(cur_users.includes(nw_users[i])){
        console.log("the person will need to enter a new username")
    }
    else {
        console.log("Username is available")
    }
}

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
