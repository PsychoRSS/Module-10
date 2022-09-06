const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const { type } = require('os');



const promptChoices = () => {

    return inquirer.prompt([
      {
        type: 'list',
        name: 'choices',
        message:'What would you like to do?',
        choices: ['Create new employee', 'Exit'],
      }
    ]).then(answers => {
      if(answers == [0]){
        createEmployee();
      } else
      return
      
    })
  };

  promptChoices();

  const createEmployee = () => {
    return inquirer.prompt ([
        {
        type: 'input',
        name: 'employeeName',
        message: 'What is the employees name',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'What is the employees Email',
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employees ID Number',
        },
    ]).then(answers => {
        return new Employee

    })
  }

  
// const promptManager = () => {

//     return inquirer.prompt([
//       {
//         type: 'input',
//         name: 'managername',
//         message: 'What is the manager name?',
//         validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log('Please enter your name!');
//             return false;
//           }
//         }
//       }
//     ]).then(answers => {
//       console.log(answers)
      
//     })
//   };

//   promptManager();