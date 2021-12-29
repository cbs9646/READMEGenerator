// This is a function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(choices) {
  const { licenseList, userName, yearCompleted } = choices;
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
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(choices) {
  console.log(choices);

  const {
    yearCompleted,
    projectTitle,
    projectDescription,
    installation,
    userInteraction,
    licenseList,
    contribute,
    testing,
    additionalQuestions,
    githubUN,
    emailaddress,
  }
} = choices;

module.exports = generateMarkdown;
