
const {HelpCommand, WeatherCommand, JokeCommand, GreetCommand} = require("../commands");
const {Chatbot} = require("../ChatBot");


describe("HelpCommand", (): void => {
  it("should return a help message", (): void =>{
    const result = new HelpCommand().execute();
    expect(result.toLowerCase()).toMatch(/help/);
  });
});

describe("WeatherCommand", (): void =>{
  it("should return a message with information about the weather", (): void =>{
    const result = new WeatherCommand().execute();
    expect(result.toLowerCase()).toMatch(/weather/);
  });
});

describe('GreetCommand', (): void => {
  it("should return a greeting message containing the name of user", (): void =>{
    const result = new GreetCommand().execute("Josh");
    expect(result).toMatch(/Josh/);
  });

  it("should return a greeting message", (): void =>{
    const result = new GreetCommand().execute();
    expect(result).toMatch(/Hi/);
  });
});

describe('JokeCommand', (): void => {
  it("should return a joke in the form of a string", (): void =>{
    const result = new JokeCommand().execute();
    expect(result).toMatch("Dear Math, grow up and solve your own problems");
  });
});

describe("Unknown command", (): void =>{
  it("should return message of `Unknown command`", (): void =>{
    const myBot = new Chatbot();
    const result = myBot.executeCommand("a");
    expect(result).toMatch("Unknown command");
  });
});

interface BotCommands {
  command: string;
  expected: string | RegExp;
}

describe('executeCommand', (): void => {

  const myBot = new Chatbot();
  const commands: BotCommands[] = [
    { command: "help", expected: /help/ },
    { command: "greet", expected: /Hi there!/ },
    { command: "weather", expected: /weather/ },
    { command: "joke", expected: "Dear Math, grow up and solve your own problems"},
    { command: "invalidCommand", expected: "Unknown command" }
  ];

  commands.forEach(element => {
    it(`should return correct output for "${element.command}"`, (): void =>{
      const result: string = myBot.executeCommand(element.command);
      expect(result).toMatch(element.expected);
    });
  });
});

describe("empty command", (): void =>{
  it(`should return "Unknown command"`, (): void =>{
    const myBot = new Chatbot();
    const result = myBot.executeCommand("");
    expect(result).toMatch("Unknown command");
  });
});
  
