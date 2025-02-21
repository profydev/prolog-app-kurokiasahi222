// import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";
import { port } from "../e2e/port";
// import { useGetProjects } from "@features/projects";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    });

    // open projects page
    cy.visit(`http://localhost:${port}/dashboard`);
  });

  // Solution 9: Add loading screen to project list
  // Added after watching the solution video, since I was not sure how to create tests for this feature
  it("renders a loading screen", () => {
    // check that the loading screen is rendered
    // data-* is a html attribute that is used to store custom data private to the page or application
    cy.get("[data-testid='loading-indicator']").should("be.visible");
    // Check that the loading screen is not visible after the projects are loaded
    cy.get("[data-testid='project-list']").should("be.visible");
    cy.get("[data-testid='loading-i  ndicator']").should("not.exist");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusNames = ["Critical", "Warning", "Stable"];
      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          // Added for Task 7: Project list doesn’t show correct status
          // This makes sure that the status is displayed correctly
          cy.wrap($el).contains(statusNames[index]);
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
