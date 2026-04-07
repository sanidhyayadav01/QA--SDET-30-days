class LoginPage{

    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    enterUsername(user){
        cy.get('[name="username"]').type(user);
    }

    enterPassword(pass){
        cy.get('[name="password"]').type(pass);
    }

    login(){
        cy.get('.oxd-button').click();
    }

    verifyDashboard(){
        cy.url().should("include", "/dashboard");
    }

}
export default LoginPage;