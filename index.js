import ora from 'ora';
import figlet from "figlet";
import { rainbow, instagram, mind, passion } from "gradient-string";
import boxen from 'boxen';
import { pfp } from "./assets/ascii_pfp.js";
import enquirer from 'enquirer';
import ansiColors from 'ansi-colors';
const { red } = ansiColors;
const { Select } = enquirer;
import colors from 'ansi-colors';


const spinner = ora('Jeet Waking Up! ').start();

async function header(res) {
  console.clear();

  
  var text = figlet.textSync("Hi", { font: "Big Money-nw" });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner.stop();
  console.log(mind.multiline(text));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.clear();
  text = figlet.textSync("I'm Jeet!", { font: "Big Money-nw" });
  console.log(instagram.multiline(text));
  spinner.stop();
  return res();
  
}

setTimeout(() => {
  spinner.color = 'yellow';
  spinner.text = 'Jeet is ready ';
}, 1000);

await new Promise((resolve) => header(resolve));

await new Promise((resolve) => setTimeout(resolve, 2000));

function viewMe() {
  console.log(passion.multiline(pfp));
}

console.log(boxen(("Welcome to Jeet's Portfolio!"), {
  padding: 1,
  margin: 1,
  borderStyle: 'bold',
  borderColor: 'magenta'
}));


async function selection() {

  const prompt = new Select({
    name: 'action',
    message: colors.redBright.bold('What would you like to do?'),
    choices: [
      'View Jeet',
      'Talk to Jeet',
      'Play Truth/Dare',
      'Exit'
    ],

    prefix() {
      return colors.green('root@jeet ~');
    },

  
    pointer() {
      return colors.yellowBright.bold('○');
    },

    styles: {
      primary: colors.redBright,
      muted: colors.dim.green,
      danger: colors.red,
      success: colors.green.bold
    }
  });

  let answer;
  try {
    answer = await prompt.run();
    console.log(colors.green('\nAccessing:'), colors.bold(answer));
  } catch (err) {
    console.error(err);
  }

  if(answer === 'View Jeet') {
    viewMe();
  } else {
    return 1;
  }
  return 0;


  }

while(true){
  const res = await selection();
  if(res === 1) {
    console.log(colors.red.bold('\nExiting...'));
    break;
  }
}

