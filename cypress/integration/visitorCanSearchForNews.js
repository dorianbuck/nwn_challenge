import fakeLocation from "../support/fakeLocation";

describe("Visitor Can Search And See A Collection Of News", () => {
  beforeEach(() => {
    cy.intercept("https://api.opencagedata.com/geocode/v1/**", {
      fixture: "location_sweden",
    });
    cy.intercept("https://newsapi.org/v2/top-headlines**", {
      fixture: "world_news_index",
    });

    cy.visit("/", fakeLocation({ latitude: 58.858093, longitude: 18.294694 }));
    cy.get("[data-cy='news-section']").as("newsSection");
    cy.get("[data-cy='search-input']").as("searchInput");
  });
  it("Is expected to see On Page Load", () => {
    cy.get("@searchInput").type("Sweden");
    cy.get("button").contains("Search").click();
    cy.get("@newsSection").children().should("have.length", 20);
  });
  it("is expected to show content on the first news card", () => {
    cy.get("@newsSection").within(() => {
      cy.get("[data-cy=news-card]");
      cy.get(".image").should("be.visible");
      cy.get(".header").should("contain", "Democrats take control of Senate!");
      cy.get(".description").should(
        "contain",
        "Nu berättar Skäringer Lázár att hon och maken har gått runt och varit irriterade under en tid."
      );
    });
  });
});
