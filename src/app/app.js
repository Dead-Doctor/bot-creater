require('dotenv').config();
const { CommandInterface } = require('../libs/commandInterface');
const { setImage } = require('../libs/updateUI');

const Discord = require('discord.js');
const client = new Discord.Client();

const commandInterface = new CommandInterface('!');

commandInterface.registerCommand({
  identifier: 'hello',
  description: 'Greet someone',
  arguments: {
    name: /[α-ω]/gi,
  },
  callback(name) {
    console.log(`Hello ${name}!`);
  },
});

console.log(commandInterface.logCommands('discord-embed'));

client.on('ready', () => {
  console.log('I am ready!');
  setImage('#avatar', client.user.avatarURL());
});

console.log(process.env.TOKEN);
client.login(process.env.TOKEN);
