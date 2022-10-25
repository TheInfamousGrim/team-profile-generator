// Import the Employee parent class
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, imgSrc, gitHub) {
        super(name, id, email, imgSrc);
        this.gitHub = gitHub;
        this.title = 'Engineer';
    }

    getGitHub() {
        return this.gitHub;
    }
}
module.exports = Engineer;
