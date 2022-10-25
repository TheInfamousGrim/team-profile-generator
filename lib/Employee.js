class Employee {
    constructor(name, id, email, imgSrc) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.imgSrc = imgSrc;
        this.title = 'Employee';
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getImgSrc() {
        return this.imgSrc;
    }

    getRole() {
        return this.title;
    }
}

module.exports = Employee;
