import { CommandDefinition } from '../CommandDefinition';
//import { MessageEmbed } from 'Discord.js';
const { MessageEmbed } = require('discord.js');
import { commands } from '../commands';
import { BOT_COLOR, Category } from '../constants';

export const help: CommandDefinition = {
  name: "help",
  description: "Help for PuddingBot",
  category: Category.UTIL,
  executor: async (msg) => {

    // Build strings of available commands
    let linkCommands: string = "";
    let funnyCommands: string = "";
    let utilCommands: string = "";
    let adminCommands: string = "";

    commands.forEach( cmd => {
      switch (cmd.category) {
        case Category.LINK:
          linkCommands += `\`.${cmd.name}\`\n`;
          break;
        case Category.IMAGES:
          funnyCommands += `\`.${cmd.name}\`\n`;
          break;
        case Category.UTIL:
          utilCommands += `\`.${cmd.name}\`\n`;
          break;
        case Category.ADMIN:
          adminCommands += `\`.${cmd.name}\`\n`;
          break;
      }
    });

    utilCommands = utilCommands.replace("\`.help\`\n", "");

    const helpEmbed = new MessageEmbed({
      title: "PuddingBot  -  Help",
      description: "Hi, I'm Puddingbot, serving the Puddings Discord server.\n\n**Available commands:**",
      fields: [
        {
          name: `${Category.LINK}:`,
          value: linkCommands,
          inline: false
        },
        {
          name: `${Category.IMAGES}:`,
          value: funnyCommands,
          inline: false
        },
        {
          name: `${Category.UTIL}:`,
          value: utilCommands,
          inline: false
        },
        {
          name: `${Category.ADMIN}:`,
          value: adminCommands,
          inline: false
        }
      ],
      color: BOT_COLOR,
      footer: { text: 'Contact mods if you have further questions' },
    });

    await msg.channel.send({ embeds: [helpEmbed] });
  }
};
