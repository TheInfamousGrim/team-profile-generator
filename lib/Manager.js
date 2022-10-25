// Import the Employee Class
const Employee = require('./Employee');

// Manager class is a child of the Employee class
class Manager extends Employee {
    constructor(name, id, email, imgSrc, officeNumber) {
        super(name, id, email, imgSrc);
        this.officeNumber = officeNumber;
        this.title = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;
