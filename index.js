import { Client, GatewayIntentBits, Partials, Collection } from "discord.js";
import { readdirSync } from "fs";
import "dotenv/config";

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

// Event Loader
readdirSync("./events").forEach(async (file) => {
  const event = await import(`./events/${file}`).then((f) => f.default);
  event(client);
});

// Command Loader
client.commands = new Collection();
readdirSync("./commands").forEach((category) => {
  readdirSync(`./commands/${category}`).forEach(async (file) => {
    const command = await import(`./commands/${category}/${file}`).then(
      (m) => m.default
    );
    client.commands.set(command.name, command);
  });
});

client.login(process.env.TOKEN); // BOT TOKEN
