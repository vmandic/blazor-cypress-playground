/// <reference types="Cypress" />

describe("navigation", function() {
  it("opens home page", function() {
    cy.visit("https://localhost:5001");
    cy.contains("Hello, world!");
  });

  it("opens home page and navigates to TODO list", function() {
    cy.visit("https://localhost:5001");

    cy.contains("TODO list").click();
    cy.url().should("eq", "https://localhost:5001/todo-list");
    cy.contains("TODOs");
  });
});

// WARNING: does not work with blazor
// describe("TODO list", function() {
//   it("should add three TODOs", function() {
//     cy.visit("https://localhost:5001/todo-list");
    
//     cy.get(".btn-primary").click();
//     // addBtn.click({ force: true });
//     // cy.wait(100);
//     // addBtn.click({ force: true });
//     // cy.wait(100);
//     // addBtn.click({ force: true });
//     // cy.wait(100);
    
//     // cy.get(".form-inline").should("have.length", 1);
//   });
// });
