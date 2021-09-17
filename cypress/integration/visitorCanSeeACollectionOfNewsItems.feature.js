describe("The collection of news articles", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("is expected for header to exist and have image", () => {
    cy.get("[data-cy=logo]").within(() => {
      cy.get("[data-cy=logoImg]").should("be.visible");
    });
  });

  it("is expected to display a header", () => {
    cy.get("[data-cy=header]").should("contain", "News Wire Network");
    cy.get("[data-cy=header-card]").should("contain", "News from around the world")
  });

  it("is expected to show a card of the top headline", () => {
    cy.get("[data-cy=top-headline]").should("be.visible");
    cy.get("[data-cy=top-headline]").within(() => {
      cy.get("[data-cy=header").should("contain", "DBS Bank to launch");
    });
  });
});
