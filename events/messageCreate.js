import cooldown_control from "../utils/cooldown_control.js";

export default (client) => {
  const prefix = process.env.PREFIX;

  client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    // Permission Control
    if(command.permission && !message.member.permission.has(command.permission)) return message.reply(`You need to have \`${command.permission}\` permission to use this command!`)

    // Cooldown Control
    const cooldown = cooldown_control(command, message.member.id)
    if(cooldown) return message.reply(`You have to wait \`${cooldown}\` seconds to use this command again!`)

    try {
      command.execute(message);
    } catch (error) {
      console.error(error);
      console.log("Something went wrong with the command");
    }
  });
};
