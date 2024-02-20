export class loginElement {
    static get textBoxes(){
        return{
            get username(){
               return cy.get("#loginusername")
            },
            get password(){
            return cy.get("#loginpassword")
            }
        }
      
    }
    
    static get buttons(){
        return{
            get close(){
                return cy.get(".btn btn-secondary")
            },
            get loggin(){
                return cy.contains('button', 'Log in')
            }
        }
        
       
    }
    
}
