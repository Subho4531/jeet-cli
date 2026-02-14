#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { rainbow } from "gradient-string";



// ===== HEADER =====
console.clear();

const header = figlet.textSync("Jeet!", {
  font:"Big Money-nw",
});

console.log(rainbow.multiline(header));


// ===== INTRO CONTENT =====
const intro = `
${chalk.bold("🚀 Full Stack Explorer | AIML Engineer | Builder")}

👋 Hey, I'm ${chalk.cyan("Subhajeet Gorai")}

I build things that live on the internet.
From Web3 experiments to AI-powered systems —
I turn ideas into working code.

${chalk.yellow("⚡ Currently Leveling Up:")}
• Advanced Backend Systems
• AI/ML Engineering
• Scalable Architectures

${chalk.green("🔗 GitHub:")} https://github.com/yourusername
${chalk.blue("🔗 LinkedIn:")} https://linkedin.com/in/yourusername
`;

console.log(
  boxen(intro, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "cyan"
  })
);


// ===== MENU =====
const runMenu = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: chalk.magenta("Navigate using ↑ ↓ and press Enter 🚀"),
      choices: [
        "📂 View Projects",
        "🧠 Tech Stack",
        "📬 Contact",
        "❌ Exit"
      ]
    }
  ]);

  switch (answer.option) {
    case "📂 View Projects":
      console.log(chalk.green("\n🔥 Featured Projects:\n"));
      console.log("• AI Image Generator");
      console.log("• Web3 Smart Contract Tooling");
      console.log("• Notes App with Persistent Storage\n");
      break;

    case "🧠 Tech Stack":
      console.log(chalk.cyan("\n💻 Stack:\n"));
      console.log("• JavaScript / Node.js");
      console.log("• React");
      console.log("• Solidity");
      console.log("• Python (AI/ML)\n");
      break;

    case "📬 Contact":
      console.log(chalk.yellow("\n📩 Reach Me At:\n"));
      console.log("Email: yourmail@example.com");
      console.log("LinkedIn DM is open 🚀\n");
      break;

    case "❌ Exit":
      console.log(chalk.red("\nPeace out ✌️\n"));
      process.exit();
  }

  runMenu(); // loop menu again
};

runMenu();
