import login from '../support/pageObject/login';

describe('Login page', () => {
    before(() => {
        cy.visitOnDomain('/', 'cz')
        cy.fixture('user').as('user')
    });

    it('Go to login page', function () {
        login.openLoginPage();
        login.login(this.user.email, this.user.password);
    });
});
