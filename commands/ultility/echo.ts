// commands/echo.ts
import { commands } from '../../main';
export default function addCommands(commands: discord.command.CommandGroup) {
  commands.on(
    'echo',
    (args) => ({
      input: args.text()
    }),
    async (message, { input }) => {
      // Send a message
      await message.reply(
        new discord.Embed({
          description: `${message.member.toMention()} says: ${input}`,
          color: 0x55ff55,
          footer: {
            text: `c.time command given by ${message.author.getTag()}`,
            iconUrl: message.author.getAvatarUrl()
          }
        })
      );
    }
  );
}
