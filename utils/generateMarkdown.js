// function to generate markdown for README
function generateMarkdown(data) {
  return `## Title:
   ${data.title}
  ## GitHub Username: 
  ${data.GitHub}
  ## Email Address:
  ${data.email}
  ## Describe Your Project:
  ${data.description}
  ## Installation Instructions:
  ${data.installation}
  ## Usage Information:
  ${data.usage}
  ## Contribution Guidelines:
  ${data.contribution}
  ## Test Instructions:
  ${data.test}
  ## Liscensing Agreement:
  ${data.stack}
`;
}

module.exports = generateMarkdown;
