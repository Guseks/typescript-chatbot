
interface Command {
  execute(input?: string): string;
}

class HelpCommand implements Command {
  execute(): string {
    return "Here is the help text\n";
  }
}

class WeatherCommand implements Command {
  execute(): string {
    return "The Weather is Sunny today with a temperature of 8 degrees. Almost no wind. Beautiful day for a walk\n";
  }
}

class GreetCommand implements Command {
  execute(name?: string): string {
    if(name) {
      return `Hi ${name}! Nice to see you. How are you?\n`;
    }
    else {
      return `Hi there! Nice to see you. How are you?\n`;
    }
    
  }
}

class JokeCommand implements Command {
  execute(): string {
    return "Dear Math, grow up and solve your own problems\n"
  }
}

export class Chatbot {
  
  executeCommand(command: string, name?: string): string {
    switch(command.toLowerCase()){
      case "help":
        return new HelpCommand().execute();
      case "weather":
        return new WeatherCommand().execute();
      case "greet":
        return new GreetCommand().execute(name);
      case "joke":
        return new JokeCommand().execute();
      default:
        return "Unknown Command\n";
        
    }
    
  }

}



