// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
return inquirer.prompt(questions)
}


const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required for installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for usage of this program?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Would you like to include and collaborators or 3rd party resources used?'
    },
    {
        type: 'input',
        name: 'experience',
        message: 'Were there any experiences that stood out to you on this project?'
    },
    {
        type: 'confirm',
        name: 'license',
        message: 'Would you like to include licsensing for this project?',
        default: true
    },
    {
        type: 'list',
        name: 'licenseList',
        message: 'Which license would you like to use?',
        choices: [
            'Apache',
            'Academic',
            'GNU',
            'ISC',
            'MIT',
            'Mozilla',
            'Open'
        ],
        when: ({license}) => {
            if(license) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
    

];

//const license = [ listInquirer]

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./utils/readme.md', data, err => {
        if (err) {
            return err;
        }
        console.log('files were written succesfully')
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(data => {
       let readMeData = generateMarkdown(data);
       writeToFile(readMeData)
    })
    // .then(generateMarkdown => {
    //     writeToFile(generateMarkdown);
    // })
}

// Function call to initialize app
init();
