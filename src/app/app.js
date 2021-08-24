require('dotenv').config();
const { CommandInterface } = require('../libs/commandInterface');
const { setHTML, setText, setImage } = require('../libs/updateUI');

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
  setText('#name', client.user.username);
});

client.on('voiceStateUpdate', (_oldMember, newMember) => {
  let newUserChannel = newMember.channel;
  if (newUserChannel != undefined) {
    if (newUserChannel.id == 846699993175031808) {
      newUserChannel.join();
      // Create a dispatcher
      // const dispatcher = connection.play('rickroll.mp3');
      // dispatcher.on('finish', () => {
      //   newMember.kick();
      // });

      // // Always remember to handle errors appropriately!
      // dispatcher.on('error', console.error);
    }
  }
});

client.login(process.env.TOKEN);
