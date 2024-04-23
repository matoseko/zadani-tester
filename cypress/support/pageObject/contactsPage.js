export default {

    addContactButton: '[data-analytics-id="contactsTable.buttons.addContact"]',
    idNumber: '#invoice_attributes_company_number',
    companyName: '.el-autocomplete > .el-input > .el-input__inner',
    streetName: '#invoice_attributes_address_attributes_street',
    city: '#invoice_attributes_address_attributes_city',
    postalCode: '#invoice_attributes_address_attributes_postcode',
    taxNumber: '#invoice_attributes_tax_number',
    saveContactButton: '.form-actions > .el-button--warning',
    contactsTable: '.white-container--with-padding',
    scrollBarSuggestion: '.autocomplete-item',
    editButton: '[data-analytics-id="icon-edit"]',
    sortDesc: '.has-gutter > tr > .el-table_1_column_1 > .cell > .caret-wrapper > .descending',
    searchBar: '.el-input__inner',
    createInvoiceButton: '.create-invoice-button',
    invoiceButton: '[data-analytics-id="invoicesTable.emptyInvoices.button"]',
    description: '.el-autocomplete inline-input',
    


    addNewContact() {
        cy.get(this.addContactButton).click();
        cy.url().should('include', '/kontakty/new');
    },

    createContactWithId(idNumber) {
        cy.get(this.idNumber).should('be.visible').type(idNumber + '{enter}');
    },

    createContact(companyName, streetName, city,idNumber, taxNumber, postalCode) {
        cy.get(this.companyName).should('be.visible').type(companyName);
        cy.get(this.scrollBarSuggestion).should('be.visible').should('contain.text', companyName).click();
        cy.get(this.streetName).should('be.visible').should('contain.value',streetName);
        cy.get(this.city).should('be.visible').should('contain.value', city);
        cy.get(this.idNumber).should('be.visible').should('have.value', idNumber);
        cy.get(this.taxNumber).should('be.visible').should('have.value', taxNumber);
        cy.get(this.postalCode).should('be.visible').should('have.value', postalCode);
        cy.get(this.saveContactButton).click();
        cy.get(this.contactsTable).should('be.visible').should('contain', companyName);
    }, 

    verifyNewAddedContact(companyName, streetName, city,idNumber, postalCode) {
        cy.get(this.companyName).should('be.visible').should('have.value', companyName);
        cy.get(this.streetName).should('be.visible').should('contain.value',streetName);
        cy.get(this.city).should('be.visible').should('contain.value', city);
        cy.get(this.idNumber).should('be.visible').should('have.value', idNumber);
        cy.get(this.postalCode).should('be.visible').should('have.value', postalCode);
        cy.get(this.saveContactButton).click();
        cy.get(this.contactsTable).should('be.visible').should('contain', companyName);
    },


    openPage(navbarLink) {
        const navbarLinkSelector = `a[href="/${navbarLink}"]`;
        cy.get(navbarLinkSelector).first().should('be.visible').click({ force: true });
        cy.url().should('contain', navbarLink);
    },

    openEditContact() {
        cy.get(this.editButton).first().click({force: true});
    },

    editContact() {
        cy.get(this.streetName).should('be.visible').clear().type('Ulice 123');
        cy.get(this.city).should('be.visible').clear().type('Praha');
        cy.get(this.saveContactButton).click();
    },

    sortContactsDesc(companyName) {
        cy.get(this.sortDesc).click();
        cy.get(this.contactsTable).first().should('be.visible').should('contain', companyName);
    },

    searchContact() {
        cy.get(this.searchBar).should('be.visible').type('dev')
        cy.get(this.contactsTable).first().should('be.visible').should('contain', 'DEV');
    },

    openInvoice() {
        cy.get(this.createInvoiceButton).click();
        cy.url().should('include', '/faktura');
    }
}