/*
Create a new form named incomeBracket.
** Comment out the code in the previous forms or it will interfere with this form. Scenario: 
Using Bootstrap4 Controls and Events - NO alerts, prompts, confirms, console.logs - 
create a program that tells the user which tax bracket an income is in. 
The program must let the user run it until they don't want to run it again. 

The tax brackets are:      

 income less than $30,000, tax bracket is 8%
 income less than $99,999, tax bracket is 15%
 income equal to or above $99,999, tax bracket is 25%

Requirements: 

Name all controls appropriately like we did in class. 
Use the format below for output and use a template literal:
eg. Say the user input:  100000. The output would be:
             "With your income of $100000, you are in a tax bracket of 25%"
Use at least one if/else statement.

*/



function getBracket (income) {
  
    let bracket = ""
    
    if (income<30000){
      bracket = "8%"
    }
    
    else if (income >= 30000 && income < 99999) {
      bracket = "15%"
    }
    
    else {
      bracket = "25%"
    }
    
    return bracket
}





Submit.onclick=function(){
  ShowBracket.value = `With your income of $${Input.value}, you are in a tax bracket of ${getBracket(Input.value)}`
}



Restart.onclick=function(){
  ShowBracket.value = ""
  Input.value = ""
}
