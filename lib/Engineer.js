const { Model, DataTypes } = require('sequelize');
const Employee = require('./Employee');


class Engineer extends Employee{
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;

        this.github = github;

        this.getGithub = () => {
            return this.github
        }
       
        this.getRole = () => {
            return "engineer"
        }
    }
}

module.exports = Engineer