const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
We will create an application where we will register people into an array. 
We will have a functionat that allows the host to check the registry to see all the user registered.
Use a for loop to go through all the users registered

This application also allows the host add users to the banned list and check them when they need to

CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
- hint, you will need a boolean to check... let checkBan = false...

CHALLENGE 2, use the settings to allow the adding the go through or not
*/

let users = [];
let banned = [];
let settings = {
  addRegistry:true,
  checkRegistry:true,
  banPerson:true,
  checkBans:true
}

/* --------------------------------------------- PLANNING --------------------------------------------- 

Command = allow add
  true -> add the user, false -> denied
Command = add
  add the user to registry

Command = allow check
  true -> check the users, false -> denied
Command = check
  check all the users

Command = allow ban
  true -> ban the user, false -> denied
Command = ban
  ban the user

Command = allow check ban
  true -> check the banned the users, false -> denied
Command = check banned
  check all the banned users

2 main lists
  - The users
  - The banned
 to add user, just push it to the users list
 to ban a user, just push it to the banned list

 CHALLENGE 1  
 If you can add the user = true
  it will be necessary to check in the banned list if the user is included or not - checkBan
    if it is included in the checkBan > cannot be added because he/she is baned
    if it is not includded in the checkBan > add the user
if you cannot add the user = false
  console log > permision denied

CHALLENGE 2
if you can ban the user = true
  it will be necessary to check the banned list if the user is included or not - checkBan
  if the user is already in the checkBan > you  cannot be add because he/she is already banned
  if it is not includded in the checkBan > add the user to the ban list
if you cannot ban the user = false
  console log > permision denied



  --------------------------------------------- PLANNING --------------------------------------------- */


function StartApp() {
  readline.question("What would you like to do? ", (_command) => {

    if (_command !== "quit") {
    
      // the other if statements need to be inside/after the quit -- Vien
      
      if (_command === "add"){
        console.log("Add user to registry");
        AddUserToRegistry();
      } else if(_command === "check registry"){
        console.log("Check registry users");
        CheckRegistry();
      } else if(_command === "ban"){
        console.log("Ban user");
        BanUser();
      } else if (_command === "check ban"){
        console.log("Check the banned users");
        CheckBanned();


    } else if (_command === "allow add"){
      // toggle the setting
      settings.addRegistry = !settings.addRegistry;
      StartApp();
    } else if (_command === "allow check"){
      // toggle the setting
      settings.checkRegistry = !settings.checkRegistry;
      StartApp();
    } else if (_command === "allow ban"){
      // toggle the setting
      settings.BanUser = !settings.BanUser;
      StartApp();
    } else if (_command === "allow check ban"){
      // toggle the setting
      settings.checkBans = !settings.checkBans;
      StartApp();
    } 
    } else {
      readline.close();
    }
  });
}

StartApp();


function AddUserToRegistry() {
  //user readline to prompt for the name of the user to be added
  if(settings.addRegistry === true){
       readline.question("Type the user that you want to add ", _users=>{
        let checkBans = banned.includes (_users); // to check if the user is in the banned list
        if (checkBans) {
          console.log (` The ${_user} cannot be added because he/she is banned`)
        } else {
          users.push(_users);
          //console.log(names); add the user
        }
        StartApp();
    });
   } else {
       console.log("Permission denied! You can't add a user.");
       StartApp();
   }
}

function CheckRegistry(){
  if(settings.checkRegistry === true){
    for(let i=0; i<users.length; i++){
      console.log(`The user is ${users[i]}`)
  } 
} else {
  console.log("Permission denied! You can't check the registry.")
}
  StartApp();
}

function BanUser(){
  //use readline to prompt for the name of the user to be banned
  
  // Here it is not the users list, it is the banned list -- Vien
  
  if(settings.banPerson === true){
    readline.question("Type the user that you want to ban ", _banned=>{
     let checkBans = banned.includes(_banned); // to check if the user is already in the banned list
     if (checkBans){
      console.log (`The ${_banned} cannot be banned because he/she is already banned`)
     } else {
     banned.push(_banned);
     }     //console.log(names); add the user to the banned list
     StartApp();
 });
  } else {
    console.log("Permission denied! You can't ban a user.")
    StartApp();
  }
}

function CheckBanned(){
  //loop through all the banned users and log them
  if(settings.checkBans === true){
    for(let i=0; i<banned.length; i++){
      console.log(`The banned user is ${banned[i]}`)
  } 
} else {
  console.log("Permission denied! You can't check the banned users.")
}
  StartApp();
  }

