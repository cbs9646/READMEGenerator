// This is a function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(choices) {
  const { licenseList } = choices;
  if (licenseList === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yelloe.svg)](https://opensource.org/licenses/MIT)`;
  } else if (licenseList === "Apache") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (licenseList === "GNU general public license v3.0") {
    return `![License: GNU](https://www.gnu.org/graphics/gplv3-or-later.svg)`;
  } else return "";
}

// This is a function that returns the license link
// If there is no license, it will return an empty string
function renderLicenseLink(choices) {
  const { licenseList } = choices;
  if (licenseList === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (licenseList === "Apache") {
    return `[Apache](https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (licenseList === "GNU general public license v3.0") {
    return `[GNU](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  } else return "";
};


//This is a function that returns the license section of README
// If there is no license, it will return an empty string
// function renderLicenseSection(license) {

// }

// This function will generate markdown for README
function generateMarkdown(userInput) {
  console.log(userInput);

  const {
    yearCompleted,
    userName,
    projectTitle,
    projectDescription,
    installation,
    userInteraction,
    contribute,
    testing,
    additionalQuestions,
    githubUN,
    emailaddress,
  } = userInput

  return `# ${projectTitle}

    ##Created by:

  ${userName}
  
    ## Description
  
  ${projectDescription}
  
    ## Table of Contents
  
    -[Installation](#installation)
    -[Usage](#userInteraction)
    -[License](#license)
    -[Contributing](#contribute)
    -[Tests](#testing)
    -[Questions](#additionalQuestions)
    
    ## Installation

  ${installation}

    ## Usage
  
  ${userInteraction}

    ## License

  ${renderLicenseLink(userInput)} License
  ${renderLicenseBadge(userInput)} Badge

    ## Contributions
  
  ${contribute}

    ## Tests

  ${testing}

    ## Questions

  ${additionalQuestions}

    ### Github
  
  https://github.com/${githubUN}

    ### Email

  ${emailaddress}
   

  ${yearCompleted}
    `;
  
}

module.exports = generateMarkdown;
