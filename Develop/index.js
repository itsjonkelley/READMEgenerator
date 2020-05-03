const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const electron = require ("electron-html-to");
const open = require ("open");
const genMarkdown = require("./utils/generateMarkdown.js");
const api = require("./utils/api.js");
const util = require("util");
require('dotenv').config();


//export
//import
//api
const GHTOKEN = process.env.GHTOKEN


const writeFileAsync = util.promisify(fs.writeFile);


  const questions = [
  // return inquirer.prompt([
        {
          type: "input",
          name: "username",
          message: "What is your Github username?"
        },
        {
          type: "input",
          name: "title",
          message: "What is the title of your project?"
        },
        {
          type: "input",
          name: "description",
          message: "Provide a description of the project."
        },
        {
          type: "input",
          name: "email",
          message: "What is your email you would like to use?"
        },
        {
          type: "input",
          name: "installation",
          message: "What packages are needed to be installed to run the application?"
        },
        {
          type: "input",
          name: "usage",
          message: "How will you use the application?"
        },
        {
          type: "list",
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
          message: "Were tests run?"
        },
  ]

// const returnUsername = async (username) => {
// }







async function init() {
  let input = await inquirer.prompt(questions);
  console.log(input)
  const gitReturn = await api.getUser(questions.username);
        let dataObj = {
          username : input.username,
          email : input.email,
          title : input.title,
          description : input.description,
          installation : input.installation,
          usage : input.usage,
          license : input.license,
          contributors : input.contributors,
          tests : input.tests,
          picture : gitReturn.data.avatar_url,
          location : gitReturn.data.location,
          
        }
        console.log(dataObj)
        const markdown = genMarkdown(dataObj)
        console.log(markdown)
        fs.writeFile('README.md', markdown, (err) => {
        if (err) throw err;
        console.log('Successfully generated README.md.');
    });
  }

      
      
      init();
