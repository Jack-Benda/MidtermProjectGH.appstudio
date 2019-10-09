/*
Here is the data you will use:  

dog, cat, horse, mouse, pig, cow, ferret, lizard, frog

Requirements: 

Use at least one array.
Get the name of an animal from the user and add it to the end of the array using an array method. 
Include code so the user can use any mix of case to enter the animal name 
eg. the user could enter:
        eagle
        Eagle
        EAGLE
        EaglE
            etc.
Output the last animal in the array to an alert using a template literal with the format below. 
eg. Say the last animal in the array is 'eagle'. Then the output would be: 
       "The last animal is eagle."
75 Extra XP: Copy the code in the animal form and paste it into a new form named animalExtraXP.
** Comment out the code in the original form or it will interfere with this form.
Change the code in the new form by adding a for loop so the program runs exactly two times. 



animalArray = ["dog", "cat", "horse", "mouse", "pig", "cow", "ferret", "lizard", "frog"]

let newAnimal = prompt("enter a new animal")
animalArray.push(newAnimal.toLowerCase())

alert(`The last animal is ${animalArray[animalArray.length-1]}`)

*/
