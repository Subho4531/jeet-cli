import ora from 'ora';
import figlet from "figlet";
import {rainbow,instagram,mind  } from "gradient-string";
import boxen from 'boxen';

async function header(res) {

console.clear();
const spinner = ora('Jeet Waking Up! ').start();

async function doStuff() {
  var text = figlet.textSync("Hi", {
  font:"Big Money-nw",});
  await new Promise((resolve) => setTimeout(resolve, 2000));
  spinner.stop();
  console.log(mind.multiline(text));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.clear();
  text = figlet.textSync("I'm Jeet!", {
  font:"Big Money-nw",});
  console.log(instagram.multiline(text));
  spinner.stop();
  return res();
}

doStuff();
setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Jeet is ready ';
}, 1000);

}
await new Promise((resolve) => header(resolve));

await new Promise((resolve) => setTimeout(resolve, 2000));
console.log(boxen(rainbow.multiline("Welcome to Jeet's Portfolio!"), {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'cyan'
}));