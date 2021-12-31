//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// ? to ask if user wants to create a readme
const createReadme = {
    type: "list",
    name: "startGenerating",
    message: "Would you like to create a Readme for this project?",
    choices: [
        new inquirer.Separator(" = Select Y or N: = "),
        {
            name: "Y",
        },
        {
            name: "N",
        },
    ]
}

// Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "userName",
        message: "Who created this software?",
    },
    {   
        type: "input",
        name: "yearCompleted",
        message: "What year was this software completed",
    },
    {   
        type: "input",
        name: "projectTitle",
        message: "What is the title of the software or project?",
    },
    {   
        type: "input",
        name: "projectDescription",
        message: "Please enter a description for the project or software",
    },
    {   
        type: "input",
        name: "installation",
        message: "Please describe how you install this application",
    },
    {   
        type: "input",
        name: "userInteraction",
        message: "How do you interact with this program?",
    },
    {   
        type: "list",
        name: "licenseList",
        message: "Please choose a license",
        choices: [
            new inquirer.Separator( " = License List = "), 
            {
                name: "MIT",
            },
            {
                name: "Apache",
            },
            {   
                name: "GNU general public license v3.0",
            },
        ],
    },
    {
        type: "input",
        name: "contribute",
        message: "How does a user contribute?",
    },
    {
        type: "input",
        name: "testing",
        message: "How is testing performed?",
    },
    {
        type: "input",
        name: "additionalQuestions",
        message: "How can additional questions be added?",
    },
    {
        type: "input",
        name: "githubUN",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is your email?",
    },
];

//function that initializes app
function init() {
    inquirer.prompt(questions).then((userInput) => {
        const fileName = `README.md`;
        console.log(userInput.startGenerating);

//function that writes README file

    fs.writeFile(fileName, generateMarkdown(userInput), (err) =>
        err ? console.error(err) : console.log("Successfully generated")
    );
  });
}

//Ask if user wants to make a readme

function create() {
    inquirer.prompt(createReadme).then((userInput) => {
        console.log(userInput.startGenerating);
        if (userInput.start === "N") {
            process.exit();
        }
        init();
    });
}

create();





