import { signupElements } from "./signup.elements";

export class signupMethops{

    static insertusername(username){
        signupElements.Textboxes.username.invoke('val', username)

    }
static insertpassword(password){
    signupElements.Textboxes.password.invoke('val', password)
}
static ClickOnSignup(){
    signupElements.ButtonSign.signupB.click()
}
static AutoSing(username,password){
    this.insertusername(username)
    this.insertpassword(password)
    this.ClickOnSignup()
}
}