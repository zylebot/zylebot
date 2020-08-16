import { curseResponses } from '../../variables';
// commands/another-command.ts
import { commands } from '../../main';
export default function addCommands(commands: discord.command.CommandGroup) {
  commands.on(
    {
      name: 'curse',
      aliases: ['cword', 'curseword', 'nonoword', 'cw']
    },
    (args) => ({
      input: args.text()
    }),
    async (message, { input }) => {
      let random = Math.floor(Math.random() * curseResponses.length);
      let msg = await message.reply(
        new discord.Embed({ description: '`Thinking...`' })
      );
      await sleep(500);
      msg.edit(
        new discord.Embed({
          title: `A random curse word`,
          description: `\`${curseResponses[random]}\``,
          color: 0x5555ff,
          footer: {
            text: `Asked by ${message.author.getTag()}. Ask again!`
          }
        })
      );
    }
  );
}
