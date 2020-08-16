import { eightball } from '../../variables';
// commands/another-command.ts
import { commands } from '../../main';
export default function addCommands(commands: discord.command.CommandGroup) {
  commands.on(
    {
      name: 'eightball',
      aliases: ['8ball', '8b', 'conch', 'cb', 'crystalball', 'ask']
    },
    (args) => ({
      input: args.text()
    }),
    async (message, { input }) => {
      let random = Math.floor(Math.random() * eightball.length);
      let msg = await message.reply(
        new discord.Embed({ description: '`Thinking...`' })
      );
      await sleep(500);
      msg.edit(
        new discord.Embed({
          description: `Crystal ball says: \`${eightball[random]}\``,
          color: 0x5555ff,
          footer: {
            text: `Asked by ${message.author.getTag()}. Ask again!`
          }
        })
      );
    }
  );
}
