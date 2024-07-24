import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
console.log(chalk.green.bold("Welcome Guest"));
let main = async (persons) => {
    do {
        let ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "What do you want to talk about?",
            choices: ["Students", "Myself", "Exit"],
        });
        if (ans.select === "Exit") {
            console.log(chalk.greenBright.bold("\n\t\tGoodbye! Have a great day!\n"));
            break; // This will exit the do-while loop
        }
        if (ans.select === "Myself") {
            console.log(chalk.blue.bold("\n\t\tHello I'm Talking to Myself"));
            console.log(chalk.red.bold("\n\t\tMy Health is not Good"));
        }
        if (ans.select === "Students") {
            let ans = await inquirer.prompt({
                type: "input",
                message: "Which student do you want to talk?",
                name: "student",
            });
            let student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(chalk.cyan.bold(`\n\t\tHello I'm ${name.name}, and i am fine!\n\t\tSee You Again\n`));
                console.log(chalk.yellow.bold(JSON.stringify(persons.students)));
            }
            if (student) {
                console.log(chalk.cyan.bold(`\n\t\tHello I'm ${student.name}, and i am fine....!\n\t\tNice to meet you again`));
                console.log(chalk.yellow.bold(JSON.stringify(persons.students)));
            }
        }
    } while (true);
};
main(persons);
