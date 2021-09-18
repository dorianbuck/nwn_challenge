describe('Visitor Can See A Collection Of News', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', "**/top-headlines**", "fx:news_index.json")
    cy.route('GET', "**/everything**", "fx:swedish_news_index.json")
    cy.visit('/')
    cy.get("[data-cy='news-section']").as('newsSection')
    cy.get("[data-cy='search-input']").as('searchInput')
  });
  it('On Page Load', () => {
    cy.get('@searchInput').type('Sweden')
    cy.get('button').contains('Search').click()
    cy.get('@newsSection')
      .children()
      .should('have.length', 20)
  });
});