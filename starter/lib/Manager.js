// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require("./employee");

class manager extends employee {
    constructor(name, id, email , officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = manager ;