"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chatbot = void 0;
class HelpCommand {
    execute() {
        return "Here is the help text\n";
    }
}
class WeatherCommand {
    execute() {
        return "The Weather is Sunny today with a temperature of 8 degrees. Almost no wind. Beautiful day for a walk\n";
    }
}
class GreetCommand {
    execute(name) {
        if (name) {
            return `Hi ${name}! Nice to see you. How are you?\n`;
        }
        else {
            return `Hi there! Nice to see you. How are you?\n`;
        }
    }
}
class JokeCommand {
    execute() {
        return "Dear Math, grow up and solve your own problems\n";
    }
}
class Chatbot {
    executeCommand(command, name) {
        switch (command.toLowerCase()) {
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
exports.Chatbot = Chatbot;
