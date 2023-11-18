import * as readline from 'node:readline/promises';
import { Chatbot } from "./ChatBot";

async function getUserInput(prompt: string): Promise<string> {
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const userInput = await r1.question(prompt);
  r1.close();
  return userInput.trim();
}

async function main() {
  const bot = new Chatbot();
  const username = await getUserInput('\nYour name, leave blank to be anonymous: ')
  const userInput = await getUserInput('Enter command: ');
  
  const result = bot.executeCommand(userInput.trim(), username);
  console.log(result);
}

main();