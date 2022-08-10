import { EmbedBuilder } from "discord.js";

export default {
  name: "ping",
  execute(message) {
    const discord_ping = message.client.ws.ping;
    const bot_ping = Math.abs(new Date() - message.createdTimestamp)

    const pingInfo = new EmbedBuilder()
      .setColor("#0fff7b")
      .addFields(
        { name: "Discord Ping", value: `${discord_ping} ms`, inline: true },
        { name: "Bot Ping", value: `${bot_ping} ms`, inline: true }
      );

    message.reply({ embeds: [pingInfo] });
  },
};
