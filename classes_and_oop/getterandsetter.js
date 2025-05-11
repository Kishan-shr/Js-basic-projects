class User{
    constructor(email,password){
        this.email = email
        this.password = password 
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value.toUpperCase()
    }
}
const kishan = new User('h@hitesh.ai','abc')
    console.log(kishan.password);
    console.log(kishan.email);
