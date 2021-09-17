describe("", () => {
  it("is expected to visit", () => {
    cy.visit("/");
  });

  it("is expected to display a header", () => {
    cy.get("[data-cy=header]").should("contain", "News Wire Network");
  });

  it("is expected to show a card of the top headline", () => {
    cy.get("[data-cy=top-headline]").should("be.visible");
    
    cy.get("[data-cy=top-headline]").within(() => {
      cy.get("[data-cy=header").should("contain", "DBS Bank to launch");
    });
  });
});
