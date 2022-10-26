# team-profile-generator

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
![Last Commit to Current Repo](https://img.shields.io/github/last-commit/TheInfamousGrim/team-profile-generator)
![Commits a month](https://img.shields.io/github/commit-activity/m/TheInfamousGrim/team-profile-generator)

a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.

## Table of Contents 📃

1. [Description](#description)
2. [Screenshot](#screenshots)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Video Walk Through](#video-walk-through)
6. [Technology](#technology)
7. [Features](#features)
8. [Credits](#credits)
9. [License](#license)
10. [Contribution Guidelines](#contribution-guidelines)
11. [Feedback](#feedback)
12. [Socials](#socials)

## Description

The purpose of this application is to create a command-line application that can take in user inputs and use those inputs to generate A team profile HTML page.

The application has a number of features which include:

- Accepting user inputs
- When all the user inputs have been accepted then a completed team-page is rendered in the dist/ directory
- When the GitHub username is clicked, their profile is opened up in a new tab
- The default email program is opened when the email address of the employee is selected
- All employees can have the following data input and rendered:
  1. name
  2. employee ID
  3. email address
  4. path to stored img of employee
- Managers can have their office number input and rendered
- Engineers can have their github username input and rendered
- Interns can have their school input and rendered

### User Story 👤

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

### What did I Learn 🏫

Probably the most important aspect of this project was learning how to use the principles of OOP(object orientated programming). Specifically how to use classes correctly.

Other things I learned:

- Furthered my knowledge of inquirer
- Learned how to implement the principles of Test Driven Development by using Jest
- Learned more about how to structure my applications

## Screenshots

![Team Profile Rendered Output Screenshot](./assets/README_imgs/screenshot-team-profile-html.png)

## Installation

In order to install this note taker app and test it you need to follow these steps.

1. Ensure that you have node and npm installed

   - [Download Node](https://nodejs.org/en/download/)

   - For detailed instructions on installing node please follow [this link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for instructions

2. Clone this repository into your local repository.

   - `git clone git@github.com:TheInfamousGrim/team-profile-generator.git`.

3. Install the dependencies

   - `npm install`

If you've followed these steps correctly then the application should be good to go and can be tested using software like [Insomnia Core](https://insomnia.rest/) 😁

## Usage

Please follow these steps to use the application

1. Run the following script from your terminal

   - `npm run start`

## Video Walk Through

[Video Link](https://youtu.be/ZCNmQvhZBco)

## Technology

The technology used for the development of this app was:

[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)

[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)

[![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)](https://www.npmjs.com/package/jest)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://whatwg.org/)

[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/TR/CSS/#css)

dev-dependencies:

- [jest](https://www.npmjs.com/package/jest)

dependencies:

- [inquirer](https://www.npmjs.com/package/inquirer)

## Features

- Uses express.js to create and run a server
- Updates a JSON file when creating and deleting notes
- Has a functional API
- Deployed to heroku

## Credits

🙏 Made with the help of:

- [University of Birmingham Coding Bootcamp](https://www.birmingham.ac.uk/postgraduate/courses/cpd/coding-boot-camp.aspx)

## License

![License: MIT](https://img.shields.io/github/license/TheInfamousGrim/orm-e-commerce-back-end?color=yellow)

[MIT License](/LICENSE)

## Contribution Guidelines

I'm open to have anyone jump in and contribute just message me on [twitter](https://twitter.com/VaporWhy)

Please follow the contribution guidelines!
[Guidelines for contributing](/code_of_conduct.md)

## Feedback

![Ask Me Anything](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:finchergeorge1@gmail.com)

<img src="https://avatars.githubusercontent.com/u/89855075?v=4" alt="TheInfamousGrim">

Any feedback please email [George Fincher](mailto:finchergeorge1@gmail.com)

## Socials

GitHub: [TheInfamousGrim](https://api.github.com/users/TheInfamousGrim)

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/george-fincher-aa7869214/)

[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/VaporWhy)
