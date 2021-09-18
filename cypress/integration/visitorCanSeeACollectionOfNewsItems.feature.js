import fakeLocation from "../support/fakeLocation";

describe("Visitor Can See A Collection Of News", () => {
  beforeEach(() => {
    cy.intercept("https://api.opencagedata.com/geocode/v1/**", {
      fixture: "location_outside_sweden",
    });
    cy.intercept("https://newsapi.org/v2/top-headlines**", {
      fixture: "news_index",
    });

    cy.visit("/", fakeLocation({ latitude: 58.858093, longitude: 18.294694 }));
    cy.get("[data-cy='news-section']").as("newsSection");
  });
  it("Is espected to see On Page Load", () => {
    cy.get("[data-cy=location-display]").should(
      "contain",
      "58.858093 18.294694"
    );
    cy.get("@newsSection").children().should("have.length", 20);
  });
  it("is expected to show a card of the top headline", () => {
    cy.get("@newsSection").within(() => {
      cy.get("[data-cy=news-card]");
      cy.get(".image").find("img").should("be.visible");
      cy.get(".header").should("contain", "How Do Bitcoin Transactions Work?");
      cy.get(".description").should(
        "contain",
        "Moreover Bitcoin works as an investment take benefit cryptocurrency and so forth also. But that changed on their Bitcoin HYIP the corporation has modified the investment. Engineers of Bitcoin SV designers can seize info regarding mining OS that. Mining the cu…"
      );
    });
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
