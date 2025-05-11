//example on call 
function SetUsername(username){
    //complex db calls example
this.username =username
console.log("called execute");
}

function createUser(username,email,password){
   SetUsername.call(this,username)
//    this.username = username
    this.email = email
    this.password = password
}
const kis = new createUser("kishan","example.com","123")
console.log(kis);