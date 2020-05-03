


function generateMarkdown(data) {
  return `
# ${data.title}
#### ${data.description}

## By - 
${data.username}

## Table of Contents

#### Installation 
#### Usage 
#### Credits 
#### License 

#### At least one badge
// badge NEEDED HERE

## Installation
${data.installation}
## Usage
${data.usage} 
## What helped me accomplish the project:
### Contributing
- ${data.contributors}
### Licenses
- ${data.license}

## Tests 
${data.tests}
## Questions? Contact below:
* Github username: ${data.username}
* Located: ${data.location}
* User GitHub email: ${data.email}
  ![userpicture](${data.picture})
  

`;
};



module.exports = generateMarkdown;


