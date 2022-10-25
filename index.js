// import npm packages
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// Import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Output Directory
const DIST_DIR = path.resolve(__dirname, 'dist');
// Output file path and name
const outputPath = path.join(DIST_DIR, 'teamProfile.html');

// Import HTML template
const templateHTML = require('./src/templateHTML');

// Create an empty array of team members
const teamMembers = [];

// Function that starts the application
function startApp() {
    addManager();
}

// Get manager data inputs
function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the team manager?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Employee ID of the team manager?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email address of the team manager?',
            },
            {
                type: 'input',
                name: 'imgSrc',
                message: 'What is the imgSrc of the team manager?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number of the team manager?',
            },
        ])
        .then((val) => {
            const manager = new Manager(val.name, val.id, val.email, val.imgSrc, val.officeNumber);
            console.table(manager);
            teamMembers.push(manager);
        });
}

function addTeamMember() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'what_team_member',
                message: 'Add an engineer, Add an intern or finish assembling your team?',
                choices: ['Engineer', 'Intern', 'Assemble Team!'],
            },
        ])
        .then((val) => {
            if (val.what_team_member === 'Engineer') {
                addEngineer();
            } else if (val.what_team_member === 'Intern') {
                addIntern();
            } else {
                createTeamFile();
            }
        });
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the engineers's name`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the engineer's employee ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the engineer's email address?`,
            },
            {
                type: 'input',
                name: 'imgSrc',
                message: 'What is the img Src of the Engineer?',
            },
            {
                type: 'input',
                name: 'gitHub',
                message: `What is the engineer's github profile name?`,
            },
        ])
        .then((val) => {
            const engineer = new Engineer(val.name, val.id, val.email, val.gitHub);
            console.table(engineer);
            teamMembers.push(engineer);
            addTeamMember();
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the eIntern's name`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the Intern's employee ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the Intern's email address?`,
            },
            {
                type: 'input',
                name: 'imgSrc',
                message: 'What is the img Src of the Intern?',
            },
            {
                type: 'input',
                name: 'school',
                message: `What school did the intern go to?`,
            },
        ])
        .then((val) => {
            const intern = new Intern(val.name, val.id, val.email, val.imgSrc, val.school);
            console.table(intern);
            teamMembers.push(intern);
            addTeamMember();
        });
}

function createFile() {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    } else {
        fs.writeFileSync(outputPath, templateHTML(teamMembers), 'utf-8');
        console.log('HTML file created in the dist folder');
    }
}
