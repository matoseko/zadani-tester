import contactsPage from "../support/pageObject/contactsPage";
import invoicePage from "../support/pageObject/invoicePage";
import login from "../support/pageObject/login";

describe('Invoice page', () => {
    before(() => {
        cy.visitOnDomain('/', 'cz')
        cy.fixture('user').as('user')
        cy.fixture('contacts').as('contact')
    });

    it('Go to contact page', function () {
        login.openLoginPage();
        login.login(this.user.email, this.user.password);
        contactsPage.openPage('kontakty');
        contactsPage.searchContact();
        contactsPage.openEditContact();
        contactsPage.openInvoice();
        invoicePage.createInvoice();
        invoicePage.openInvoice('189');
        invoicePage.invoiceValidation();

    });
});