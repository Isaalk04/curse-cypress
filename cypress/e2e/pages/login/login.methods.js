import { loginElement } from "./login.elements"

export class loginmethods{
    
    static insertusername(username){
        loginElement.textBoxes.username.type(username)
    }
    static insertpassword(password){
        loginElement.textBoxes.password.type(password)
    }
    static ClickOnLogin(){
        loginElement.buttons.loggin.click()
    }
    static login (username,password){
        this.insertusername(username)
        this.insertpassword(password)
        this.ClickOnLogin()

    }
    
}

