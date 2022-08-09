import { Client, GatewayIntentBits, Partials } from "discord.js";
import {readdirSync} from "fs"
import "dotenv/config"

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
readdirSync("./events").forEach(async file => {
    const event = await import(`./events/${file}`).then(f => f.default)
    event(client)
})

client.login(process.env.TOKEN) // BOT TOKEN
