# command-interface

A JavaScript Library for parsing one-line commands.

## Usage:

Register Command `!hello <name>` and make it log `Hello <name>`

```javascript
const commandInterface = new CommandInterface('!'); //prefix

commandInterface.registerCommand({
  identifier: 'hello',
  help: 'Greet someone',
  arguments: {
    name: /[α-ω]/gi,
  },
  callback(name): {
    console.log(`Hello ${name}!`)
  }
});
```
