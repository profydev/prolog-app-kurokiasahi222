# Prolog: Erorr Logging Application

This repository is part of the [React Job Simulator](https://profy.dev) where I work on implementing tasks ranging from minor bug fixes to full-feature development based on provided designs.
Thank you to <a href="https://www.linkedin.com/in/johannes-kettmann-40a049145/?originalSubdomain=de">Johannes Kettmann</a> for creating this awesome course.


## App Info
Prolog is an error logging and monitoring tool similar to Sentry or Rollbar. It helps track and manage application errors efficiently. 

🔗 **Live Demo:** [prolog.profy.dev](https://prolog.profy.dev) .
📌 **Note:** This is a live demo given by the instructor. To view the application, click the **"Dashboard"** link in the upper right corner.  
🚧 **My Own Live Demo:** Still a work in progress! However, you can check out all the work I've done by reviewing my past  
[Pull Requests](https://github.com/profydev/prolog-app-kurokiasahi222/pulls?q=is%3Apr+is%3Aclosed).  
<img width="1270" alt="Screenshot 2025-02-18 at 13 10 59" src="https://github.com/user-attachments/assets/008af92f-9f5a-486f-99ab-9fa013581dec" />
<img width="1243" alt="Screenshot 2025-02-18 at 13 05 22" src="https://github.com/user-attachments/assets/daff7d05-fcea-4757-ac0f-adc83cc4f5c2" />

## Tech Stack
The application is built using modern web technologies to ensure performance, maintainability, and scalability.  

- **Next.js** – Framework for server-side rendering and static site generation.  
- **SCSS** – Enables modular and maintainable styles.  
- **Cypress** – End-to-end testing framework.  
- **Storybook** – Component-driven development for UI consistency.  
- **Figma** – Design tool for UI/UX prototyping.  
Feel free to explore the repository! 🚀


## Kanban board: 
Kanban board is used for project management.  
<br>
<img width="1229" alt="Screenshot 2025-02-18 at 13 06 24" src="https://github.com/user-attachments/assets/929b1d50-c8d6-4040-85c7-844666ed1cc6" />



## Getting Started
### 1. Clone & Install

This project is built with Next.js, TypeScript, Cypress & SCSS modules among others. To start working on the project, first clone the repository on your local machine and install the dependencies.
```bash
npm install
```
### 2. Create .env File
**copy the `.env.template` file to a new file called `.env`.** This file contains the required environment variables that are injected by Next.js via the `dotenv` package.
### 3. Run Development Server
Finally, run the development server:
```bash
npm run dev
```
Now you can open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Tests
This project is covered with Cypress tests. Although most tests for production apps are currently written with React Testing Library, Cypress is the best option to get started with testing. When you're new to testing the start can be very cumbersome and feel like you're in a completely new dev environment.

Cypress makes it much easier to get started with testing. You still have to get used to the new way of coding but thanks to its awesome UI debugging is easy and very similar to what you're used from your browser.

![Cypress test](docs/cypress.gif)

To run the Cypress tests on your local machine use this command:

```bash
npm run cypress
```

## Storybook

Storybook is a great tool to document your components and visually test them in isolation. To open Storybook run

```bash
npm run storybook
```
