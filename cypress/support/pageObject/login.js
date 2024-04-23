export default {
    loginButton: ".navbar-navigation__item--user",
    email: "#email",
    password: "#current-password",
    submitButton: '[data-analytics-id="button.login"]',

    openLoginPage() {
        cy.get(this.loginButton).click();
        cy.url().should('include', '/prihlaseni');
    },
    
    login(email, password) {
        cy.get(this.email).should('be.visible').type(email);
        cy.get(this.password).should('be.visible').type(password);
        cy.get(this.submitButton).click();
        cy.url().should('include', '/faktura');

    }
}