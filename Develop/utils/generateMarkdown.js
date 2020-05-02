

function generateMarkdown(data) {
  return `
# ${data.title}

##Descriptions ${answer.description}

##Table of Contents ${answer.tableOfContents}

The README will be populated with the following:

### At least one badge
### Project title : ${answer.title}
### Description : ${answer.description}
### Table of Contents ${answer.stable}
### Installation ${answer.installation}
### Usage ${answer.usage}
### License ${answer.license}
### Contributing ${answer.contributing}
### Tests ${answer.testing}
### Questions
  * User GitHub profile picture $data.
  * User GitHub email
`;
};


module.exports = generateMarkdown;
