const { Model, DataTypes } = require('sequelize');

class Manager{
    constructor(name, job, email, officeNum) {
        this.name = name;
        this.job = job;
        this.email = email;
        this.officeNum = 1;

        this.getRole = () => {
            return "Manager"
        }
    }
}

module.exports = Manager