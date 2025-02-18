import { port } from "../e2e/port";
import packages from "../../package.json";

describe("Footer", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit(`http://localhost:${port}/dashboard`);

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });
    // Tests added for Task 6: Footer
    // The current version number of the application is shown dynamically (don't hard-code it)
    // Links are shown (use # as href as the pages currently don't exist)
    // Logo is shown
    it("renders the footer", () => {
      cy.get("footer").contains(packages.version);

      cy.get("footer").contains("Docs").should("have.attr", "href", "#");
      cy.get("footer").contains("API").should("have.attr", "href", "#");
      cy.get("footer").contains("Help").should("have.attr", "href", "#");
      cy.get("footer").contains("Community").should("have.attr", "href", "#");
    });
  });
});
