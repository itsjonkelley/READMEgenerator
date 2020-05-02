const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const electron = require ("electron-html-to");
const open = require ("open");
const generateMarkdown = require("./utils/generateMarkdown.js");
const api = require("./utils/api.js");
const util = require("util");
require('dotenv').config();


//export
//import
//api
const GHTOKEN = process.env.GHTOKEN
// * At least one badge
// * Project title 
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
  const questions = [
  // return inquirer.prompt([
        {
          type: "input",
          name: "username",
          message: "What is your Github username?"
        },
        {
          type: "input",
          name: "projectTitle",
          message: "What is the title of your project?"
        },
        {
          type: "input",
          name: "description",
          message: "Provide a description of the project."
        },
        {
          type: "confirm",
          name: "tableOfContents",
          message: "Need a table of contents?"
        },
        {
          type: "input",
          name: "installation",
          message: "What do you need to install the project?"
        },
        {
          type: "input",
          name: "usage",
          message: "How will you use the project?"
        },
        {
          type: "input",
          name: "license",
          message: "What license do you need?",
          choices: ['MIT License','Apache License', 'GPL License','Unlicensed']
        },
        {
          type: "input",
          name: "contributors",
          message: "Do you have any contributors outside of yourself?"
        },
        {
          type: "input",
          name: "tests",
          message: "What tests do you run?"
        },
  ];

const returnUsername = async (username) => {
  const gitReturn = await api.getUser(questions.username);
}




function writeToFile(genMarkdown) {
  fs.writeFile("README.md", genMarkdown, function (err) {
    if (err) {
      throw err;
    }
    console.log("Successfully generated README.md.")
  });
}



// promptUser()
//   .then(function(answers) {
  //     const html = generateHTML(answers);
  
  //     return writeFileAsync("README.md", md);
  //   })
  //   .then(function() {
    //     console.log("Successfully wrote to index.html");
    //   })
    //   .catch(function(err) {
      //     console.log(err);
      //   });
      
      async function init() {
        try{
        let answers = await inquirer.prompt()
        let dataObj = {
          projectTitle : answers.projectTitle,
          description : answers.description,
          tableOfContents : answers.tableOfContents,
          installation : answers.installation,
          usage : answers.usage,
          message : answers.license,
          contributors : answers.contributors,
          tests : answers.tests,
          
        }

        }
        catch (error)
        {
          console.log(error);
        }
        
      }
      
      init();
      