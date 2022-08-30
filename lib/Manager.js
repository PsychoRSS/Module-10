const { Model, DataTypes } = require('sequelize');

class Manager{
    constructor(name, job, email) {
        this.name = name;
        this.job = job;
        this.email = email
    }
}

module.exports = Manager