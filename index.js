// array of questions for user
var inquirer= require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "GitHub username?",
        name: "GitHub"
    },
    {
        type: "input",
        message: "Email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Describe your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation instructions:",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage information:",
        name: "usage"
    },
    {
        type: "input",
        message: "Contribution guidelines:",
        name: "contribution"
    },
    {
        type: "input",
        message: "Test instructions:",
        name: "test"
    },
    {
        type: "checkbox",
        message: "Licensing agreement?",
        name: "stack",
        choices: [
        "Copyright", 
        "Trademark", 
        ]
    },
]).then((userResponse)=>{

    const data = writeHTML(userResponse)
    fs.writeFile("index.html", data, function(){
      console.log("success")
    })
  });


function writeHTML(userObj){
    console.log("inside of HTML function", userObj)
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ReadMe: ${userObj.title}</title>
    </head>
    <body>
        <h1>Description ${userObj.description}</h1>
        <h2>Installation ${userObj.installation}</h2>
        <p>Usage ${userObj.usage}</p>
        <p>Contributing ${userObj.contribution}</p>
        <p>Tests ${userObj.test}</p>
        <h2>Questions: ${userObj.GitHub}, "\n" ${userObj.email}</h2>
        <h3>Table of Contents:</h3>
    </body>
    </html>
}`  
// const questions = [

// ];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {

}

// function call to initialize program
init();
