import ora from 'ora';
import figlet from "figlet";
import { rainbow } from "gradient-string";

async function doStuff() {
  const text = await figlet.text("Hi, I'm Jeet!");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(rainbow.multiline(text));
}

doStuff();


const spinner = ora('Jeet Waking Up! ').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Jeet is ready ';
}, 1000);

setTimeout(() => {
  spinner.stop();
}, 2000);
