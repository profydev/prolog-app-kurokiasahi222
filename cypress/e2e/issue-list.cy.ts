import mockIssues1 from "../fixtures/issues-page-1.json";
import mockIssues2 from "../fixtures/issues-page-2.json";
import mockIssues3 from "../fixtures/issues-page-3.json";
import { port } from "../e2e/port";

describe("Issue List", () => {
  beforeEach(() => {
    // setup request mocks
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");
    cy.intercept("GET", "https://prolog-api.profy.dev/issue?page=1", {
      fixture: "issues-page-1.json",
    }).as("getIssuesPage1");
    cy.intercept("GET", "https://prolog-api.profy.dev/issue?page=2", {
      fixture: "issues-page-2.json",
    }).as("getIssuesPage2");
    cy.intercept("GET", "https://prolog-api.profy.dev/issue?page=3", {
      fixture: "issues-page-3.json",
    }).as("getIssuesPage3");

    // open issues page
    cy.visit(`http://localhost:${port}/dashboard/issues`);
    // // set button aliases
    // cy.get("button").contains("Previous").as("prev-button");
    // cy.get("button").contains("Next").as("next-button");
    // Move the button aliases because it will cause the loading-indicator to be gone
    // loading-indicator is used to check if the page is still loading
    // Button only appear after the page is loaded
  });

  // Solution 9: Add loading screen to project list
  // Added after watching the solution video, since I was not sure how to create tests for this feature
  it("renders a loading screen", () => {
    // check that the loading screen is rendered
    // data-* is a html attribute that is used to store custom data private to the page or application
    cy.get("[data-testid='loading-indicator']").should("be.visible");
    // Check that the loading screen is not visible after the projects are loaded
    cy.get("[data-testid='issue-list']").should("be.visible");
    cy.get("[data-testid='loading-indicator']").should("not.exist");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
      // set button aliases
      cy.get("button").contains("Previous").as("prev-button");
      cy.get("button").contains("Next").as("next-button");
    });

    it("renders the issues", () => {
      cy.get("main")
        .find("tbody")
        .find("tr")
        .each(($el, index) => {
          const issue = mockIssues1.items[index];
          const firstLineOfStackTrace = issue.stack.split("\n")[1].trim();
          cy.wrap($el).contains(issue.name);
          cy.wrap($el).contains(issue.message);
          cy.wrap($el).contains(issue.numEvents);
          // adding test for fix-issue-list-number-of-events-and-users
          cy.wrap($el).contains(issue.numUsers);
          cy.wrap($el).contains(firstLineOfStackTrace);
        });
    });

    it("paginates the data", () => {
      // test first page
      cy.contains("Page 1 of 3");
      cy.get("@prev-button").should("have.attr", "disabled");

      // test navigation to second page
      cy.get("@next-button").click();
      cy.get("@prev-button").should("not.have.attr", "disabled");
      cy.contains("Page 2 of 3");
      cy.get("tbody tr:first").contains(mockIssues2.items[0].message);

      // test navigation to third and last page
      cy.get("@next-button").click();
      cy.get("@next-button").should("have.attr", "disabled");
      cy.contains("Page 3 of 3");
      cy.get("tbody tr:first").contains(mockIssues3.items[0].message);

      // test navigation back to second page
      cy.get("@prev-button").click();
      cy.get("@next-button").should("not.have.attr", "disabled");
      cy.contains("Page 2 of 3");
      cy.get("tbody tr:first").contains(mockIssues2.items[0].message);
    });

    it("persists page after reload", () => {
      cy.get("@next-button").click();
      cy.contains("Page 2 of 3");
      cy.reload();
      cy.get("[data-testid='loading-indicator']").should("be.visible");
      cy.get("[data-testid='loading-indicator']").should("not.exist");
      cy.contains("Page 2 of 3");
    });
  });
});
