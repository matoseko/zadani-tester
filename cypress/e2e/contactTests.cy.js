import contactsPage from "../support/pageObject/contactsPage";
import login from "../support/pageObject/login";

describe('Contact page', () => {
    before(() => {
        cy.visitOnDomain('/', 'cz')
        cy.fixture('user').as('user')
        cy.fixture('contacts').as('contact')
    });

    it('Go to contact page', function () {
        login.openLoginPage();
        login.login(this.user.email, this.user.password);
        contactsPage.openPage('kontakty');
        contactsPage.addNewContact();
        contactsPage.createContact(this.contact.fakturaOnline.companyName, this.contact.fakturaOnline.streetName, this.contact.fakturaOnline.city, this.contact.fakturaOnline.idNumber, this.contact.fakturaOnline.taxNumber, this.contact.fakturaOnline.zip);
        contactsPage.addNewContact();
        contactsPage.createContactWithId(this.contact.simplyTest.idNumber);
        contactsPage.verifyNewAddedContact(this.contact.simplyTest.companyName, this.contact.simplyTest.streetName, this.contact.simplyTest.city, this.contact.simplyTest.idNumber, this.contact.simplyTest.zip);
        contactsPage.openEditContact();
        contactsPage.editContact();
        contactsPage.sortContactsDesc(this.contact.simplyTest.companyName);
        contactsPage.searchContact();

    });
});