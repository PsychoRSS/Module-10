const { Model, DataTypes } = require('sequelize');

class Intern{
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        
        this.getSchool = () => {
            return this.school
        }
    
        this.getRole = () => {
            return "Intern"
        }
    }
}

module.exports = Intern