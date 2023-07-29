// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result


// Answers:
// 1 Create three new variables:
let courseChoice = 'Flutter Complete Guide';
let coursePrice = 3990
let userMainGoals = ['Get better pay', 'Achieve the dream lifestyle', 'Remote work'];

// 2 Output ("alert") the three variable values
alert(`Chosen course: ${courseChoice}.`);
alert(`Price of course: ${coursePrice}.`);
alert(`Main Goals: ${userMainGoals}.`);

// 3 Group the three variables together and still output their values together.

let onlineCourse = {
    courseName: 'Flutter Complete Guide',
    price: 3990,
    goals: ['Get better pay', 'Achieve the dream lifestyle', 'Remote work']
}

alert(`Course choice: ${onlineCourse.courseName}`);
alert(`Course price: ${onlineCourse.price}`);
alert(`User Goals: ${onlineCourse.goals[0]}, ${onlineCourse.goals[1]}, ${onlineCourse.goals[2]}`);

// 4 output the second element in your "main goals" variable

alert(`Goal Highlight: ${onlineCourse.goals[1]}`)

// 5. Create a custom command that does the following:
function getListItem(array, arrayIndex) {
    //    - Use your "main goals" variable and access an element by its identifier
    //    - The concrete identifier value should be dynamic / flexible
    //      (i.e. the command can be executed for different identifier)
    //    - The "main goals" variable should also be dynamic: The command should work
    //      with ANY list of values
    let arrayElement = array[arrayIndex];
    //    - The custom command should provide the accessed value (i.e. the list element)
    return arrayElement;
}

// 6) Execute your custom command from (5) and output ("alert") the result
let firstElement = getListItem(userMainGoals, 0);

alert(firstElement)