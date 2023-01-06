// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email,officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole () {
        return 'Manager';
    }
}

module.exports = Manager;