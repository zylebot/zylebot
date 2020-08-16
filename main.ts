// INITIALIZATION

const commands = new discord.command.CommandGroup({
  defaultPrefix: 'c.'
});
const DadCommands = new discord.command.CommandGroup({
  defaultPrefix: ''
});
// IMPORT VARIABLES

import {
  curseResponses,
  eightball,
  imageResponses,
  videoResponses,
  pingResponses,
  slowPingResponse,
  adjectives
} from './variables';

// IMPORT MODULES

import echoModule from './commands/utility/echo';
import owoModule from './commands/fun/owo';
import eightballModule from './commands/fun/8ball';
import dadModule from './commands/fun/dad';
import mathModule from './commands/utility/math';
import curseModule from './commands/fun/curse';
import pingModule from './commands/utility/ping';
import timeModule from './commands/utility/time';
import phobiaModule from './commands/fun/phobia';
import thoughtModule from './commands/fun/thought';
import softwaregoreModule from './commands/fun/softwaregore';
import noUModule from './commands/fun/noU';

// logging stuff
import './logs';
// ACTIVATE THE MODULES

echoModule(commands);
owoModule(commands);
timeModule(commands);
// dadModule(DadCommands);
eightballModule(commands);
curseModule(commands);
pingModule(commands);
phobiaModule(commands);
thoughtModule(commands);
softwaregoreModule(commands);
noUModule(commands);
mathModule(commands);

// random channel name thing

pylon.tasks.cron('update_channel_name', '0 0/10 * * * * *', async () => {
  const channel = await discord.getGuildTextChannel('740992744582938667');
  if (!channel) {
    return;
  }

  const guild = await discord.getGuild(channel.guildId);
  if (!guild) {
    return;
  }
  let random = Math.floor(Math.random() * adjectives.length);

  await channel.edit({ name: `${adjectives[random]}-general` });
  console.debug(`${channel} is now ${adjectives[random]}-general`);
});
// BOT IS HAPPY NOW. THANK YOU.

discord.on('GUILD_MEMBER_UPDATE', async (member, old) => {
  if (member.nick !== old.nick) {
    console.info(old + ' has changed nicknames to ' + member);
  }
});
const pi = Math.PI;
discord.on('MESSAGE_CREATE', async (messsage) => {
  if (messsage.content.toLowerCase().includes('pylon')) {
    await messsage.reply(
      new discord.Embed({
        description: 'Please do not contact me. Thank you.'
      })
    );
  }
});
