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
    cy.get("[data-cy=header-card]").should(
      "contain",
      "News from around the world"
    );
  });

  it("is expected to show a card of the top headline", () => {
    cy.get("#news-1").within(() => {
      cy.get(".image").find("img".should("have.attr"));
      cy.get(".header").should("contain", "DBS Bank to launch cryptocurrency");
      cy.get(".description").should("contain", "DBS Bank of Singapore has just announced");
    });
  });
});
