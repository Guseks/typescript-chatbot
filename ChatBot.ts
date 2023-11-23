
import { HelpCommand, WeatherCommand, GreetCommand, JokeCommand } from './commands';

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
        return "Unknown command\n";
        
    }
    
  }

}



