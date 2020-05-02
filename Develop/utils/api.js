const inquirer = require("inquirer");
require('dotenv').config();
const GHTOKEN = process.env.GHTOKEN;

const api = {
  getUser(username) {
    return axios({
      method: "get",
      url: `https://api.github.com/users/${username}`,
      headers: {
        authorization: `token ${GHTOKEN}`
    }})
  }
};
 console.log ()



//export to a file, we want to export variable from line 3, make in available to any other file that calls/reads it
//can send over functions, arrays, anything that want to send over
module.exports = api;
