

function generateMarkdown(data) {
  return `
# ${data.title}

##Descriptions ${data.description}

##Table of Contents ${answer.tableOfContents}

The README will be populated with the following:

* At least one badge
* Project title ${answer.title}
* Description ${answer.description}
* Table of Contents ${answer.stable}
* Installation ${answer.installation}
* Usage ${answer.usage}
* License ${answer.license}
* Contributing ${answer.contributing}
* Tests ${answer.testing}
* Questions
  * User GitHub profile picture $data.
  * User GitHub email

`;
// # ${data["projectTitle"]}
// ## Description
// ${data.Description}
// ## Table of Contects
// ${data.tableofContects}
// ## Installation
// ${data.Installation}
// ## Usage
// ${data.Usage}
// ##  License 
// ${data.License} 
// ## Contributing
// ${data.Contributing}
// ##  Tests
// ${data.Tests}
// ![alt text](${data.image})
// ## Made by 
// ${data.username}
// ## Email
// ${data.email}
// `
};


module.exports = generateMarkdown;
