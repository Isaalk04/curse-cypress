export class signupElements{
    static get Textboxes(){
        return{
            get username(){
               return cy.get('input#sign-username')
            },
            get password(){
               return cy.get('input#sign-password')
            }
        }
    }
    static get ButtonSign(){
return{
    get closeB(){
       return cy.contains('button', 'Close').eq(1)
    },
    get signupB(){
       return cy.contains('button', 'Sign up')
    }
}


    }
}