/// <reference types="Cypress" />

const home = "https://localhost:5001";

describe("navigation", function () {
  it("opens home page", function() {
    cy.visit(home);
    cy.contains("Hello, world!");
  });

  it("opens home page and navigates to TODO list", function() {
    cy.visit(home);

    cy.contains("TODO list").click();
    cy.url().should("eq", home + "/todo-list");
    cy.contains("TODOs");
  });

  // WARNING: does not work with blazor, seems click event is not propagated
  it.only("opens counter page", function () {
    cy.visit("https://localhost:5001/counter");
    cy.location('pathname').should('equal', '/counter');
    cy.contains("Click me").click();
    cy.get(".content p").should("contain", 1);
  });
});
