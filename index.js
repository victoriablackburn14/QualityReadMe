// array of questions for user
const inquirer= require("inquirer");
const fs =require("fs");
const util=require("util");

const generateMarkdown= require("./utils/generateMarkdown");

const questions=[
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "GitHub username?",
        name: "GitHub",
    },
    {
        type: "input",
        message: "Email address?",
        name: "email",
    },
    {
        type: "input",
        message: "Describe your project:",
        name: "description",
    },
    {
        type: "input",
        message: "Installation instructions:",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage information:",
        name: "usage",
    },
    {
        type: "input",
        message: "Contribution guidelines:",
        name: "contribution",
    },
    {
        type: "input",
        message: "Test instructions:",
        name: "test",
    },
    {
        type: "checkbox",
        message: "Licensing agreement?",
        name: "stack",
        choices: [
        "Copyright", 
        "Trademark", 
        ]
    },]; 
function init(){
inquirer.prompt(questions).then((userAnswers)=>{

    const readMe=generateMarkdown(userAnswers);
    fs.writeFile("README.md", readMe, function(err){
        if(err){
            return console.log(err);
        }
        console.log("successfully load to README.md")
    });
    console.log(userAnswers)
})
.catch((err)=>console.log(err));
}
init();
// .then((userResponse)=>{

//     const data = writeHTML(userResponse)
//     fs.writeFile("index.html", data, function(){
//       console.log("success")
//     })
//   });

   
// const questions = [

// ];

// function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
