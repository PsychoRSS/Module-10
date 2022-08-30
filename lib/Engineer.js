const { Model, DataTypes } = require('sequelize');

class Engineer{
    constructor(name, job, email) {
        this.name = name;
        this.job = job;
        this.email = email
    }
}

module.exports = Engineer