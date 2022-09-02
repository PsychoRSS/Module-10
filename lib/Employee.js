const { Model, DataTypes } = require('sequelize');


class Employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        this.getEmail = () => {
            return this.email
        }
    }
}

module.exports = Employee