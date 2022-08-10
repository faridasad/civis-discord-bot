import { EmbedBuilder } from "discord.js";

export default {
  name: "info",
  execute(message) {
    const setDefaultInfo = new EmbedBuilder()
      .setColor("#be69fa")
      .setTitle("Civis Bot")
      .setURL("https://github.com/faridasad")
      .setAuthor({
        name: "Farid Asad",
        iconURL: "https://avatars.githubusercontent.com/u/85695544?v=4",
        url: "https://github.com/faridasad",
      })
      .setThumbnail("https://discord.bots.gg/img/logo_transparent.png")
      .setDescription("Civis Bot, the simplest discord bot you have ever seen")
      .setTimestamp()
      .setFooter({
        text: "Make it Better",
        iconURL: "https://discord.bots.gg/img/logo_transparent.png",
      });
    message.channel.send({ embeds: [setDefaultInfo] });
  },
};
