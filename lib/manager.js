// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const Employee = require("./Employee");

class Manager {
    constructor(officeNumber, name, id, email){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole () {
        return 'Manager';
    }
}

module.exports = Manager;