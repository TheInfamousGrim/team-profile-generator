// Import Employee parent class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, imgSrc, school) {
        super(name, id, email, imgSrc);
        this.school = school;
        this.title = 'Intern';
    }

    getSchool() {
        return this.school;
    }
}
module.exports = Intern;
