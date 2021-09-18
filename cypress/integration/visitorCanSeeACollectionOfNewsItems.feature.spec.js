describe("Visitor Can See A Collection Of News", () => {
  beforeEach(() => {
    cy.server();
    cy.route("GET", "**/top-headlines**country=se", "fx:news_index.json");
    cy.visit("/");
    cy.get("[data-cy='news-section']").as("newsSection");
  });
  it("On Page Load", () => {
    cy.get("@newsSection").children().should("have.length", 20);
  });
  it("On Page Load", () => {
    cy.get("@newsSection").children().should("have.length", 20);
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
});
