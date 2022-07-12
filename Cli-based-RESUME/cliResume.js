const inquirer = require("inquirer");

const cp = require('child_process')


function displayList(){
       inquirer
       .prompt([
         {
           type: "list",
           name: "selection",
           choices: ["About", "Skills", "Academics", "Projects"],
         },
       ])
       .then(function (answer) {
         if (answer.selection == "About") {
           console.log(`
           Greeting ,
           Divyanshu this side,
          
           Any fool can write code that a computer can understand.
           Good programmers write code that humans can understand `);
           displayNext()
         } else if (answer.selection == "Skills") {
           console.log("JavaScript , Java , c++ , html , css ");
           displayNext()
         } else if (answer.selection == "Academics") {
           cp.execSync('start chrome https://drive.google.com/file/d/1FUg_OPoEgXYg3o1VWDvSdZwUl6NHVsyw/view?usp=sharing')
           displayNext()
         } else if (answer.selection == "Projects") {
           cp.execSync('start chrome https://github.com/Divyanshu-Sethi ')
           displayNext()
         }
       });
}


displayList()


function displayNext(){
       inquirer
       .prompt([
         {
           type: "list",
           name: "selection",
           choices: ["Go Back" , 'Exit'],
         },
       ])
       .then(function (answer) {
         if (answer.selection == "Go Back") {
            displayList()
         } else if (answer.selection == "Exit") {
             console.log('Resume Closed')
         } 
       });
}

