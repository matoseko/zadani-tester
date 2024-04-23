export default {
    description: '.el-autocomplete > .el-textarea > .el-textarea__inner',
    price: '.el-col-xs-12.el-col-sm-8 > .el-form-item > .el-form-item__content > .el-input__inner',
    saveInvoiceButton: '[data-analytics-id="form.invoiceForm.buttons.save"]',
    openInvoice: '.el-table__invoice-link',

    createInvoice() {
        cy.get(this.description).should('be.visible').type('test');
        cy.get(this.price).should('be.visible').type('100000');
        cy.get(this.saveInvoiceButton).click();
        cy.url().should('include', '/kontakty');
    },

    openInvoice(invoiceLink) {
        const invoiceLinkSelector = `a[href="/vystavene-faktury/${invoiceLink}"]`;
        cy.get(invoiceLinkSelector).first().should('be.visible').click({ force: true });
        cy.url().should('include', '/vystavene-faktury');
    },

    invoiceValidation() {
        cy.contains('FAKTURA - DAŇOVÝ DOKLAD č').should('be.visible');
        cy.contains('Datum splatnosti').should('be.visible');
        // a dalsi validace
    }
}