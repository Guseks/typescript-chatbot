interface Command {
  execute(input?: string): string;
}

export class HelpCommand implements Command {
  execute(): string {
    return "Here is the help text\n";
  }
}

export class WeatherCommand implements Command {
  execute(): string {
    return "The weather is Sunny today with a temperature of 8 degrees. Almost no wind. Beautiful day for a walk\n";
  }
}

export class GreetCommand implements Command {
  execute(name?: string): string {
    if(name) {
      return `Hi ${name}! Nice to see you. How are you?\n`;
    }
    else {
      return `Hi there! Nice to see you. How are you?\n`;
    }
    
  }
}

export class JokeCommand implements Command {
  execute(): string {
    return "Dear Math, grow up and solve your own problems\n"
  }
}