class User {
    constructor(username){
        this.username =username
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
 addCourse(){
    console.log(`A new Course was added by ${this.username}`);
 }
}
const kishan = new Teacher("kishan","chai@teacher.com","123")
console.log(kishan);
kishan.addCourse()

const prince = new User("rahul")
prince.addCourse()
prince.logMe()