import fakeLocation from "../support/fakeLocation";

describe("Visitor Can Search And See A Collection Of News", () => {
  beforeEach(() => {
    cy.intercept("https://api.opencagedata.com/geocode/v1/**", {
      fixture: "location_outside_sweden",
    });
    cy.intercept("https://newsapi.org/v2/top-headlines**", {
      fixture: "world_news_index",
    });

    
    // cy.route("GET", "**/top-headlines**", "fx:news_index.json");
    // cy.route("GET", "**/everything**", "fx:swedish_news_index.json");
    cy.visit("/", fakeLocation({ latitude: 58.858093, longitude: 18.294694 }));
    cy.get("[data-cy='news-section']").as("newsSection");
    cy.get("[data-cy='search-input']").as("searchInput");
  });
  it("On Page Load", () => {
    cy.get("@searchInput").type("Sweden");
    cy.get("button").contains("Search").click();
    cy.get("@newsSection").children().should("have.length", 20);
  });
});
