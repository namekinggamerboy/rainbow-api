const Discord = require('discord.js');
const fs = require("fs"); 
const client = new Discord.Client();
const forEachTimeout = require('foreach-timeout');
const colors = ["FF0000","ffff00","00ffff","ff00ff","ffffff","000001", "8B4513","0011ff","00FF00"];
const stop = [];
async function color(client, token) {
  forEachTimeout(
    colors,
    color => {
      client.guilds.forEach(guild => {
        if (!stop.includes(guild.id)) {
          let role = guild.roles.find(e => e.name === "Rainbow");
          if (role && role.editable) role.setColor(color);
        }
      });
    },
    15000
  ).then(color);
}
client.on("ready", () => {
console.log(`now online ${client.user.username}`);
  color();
});

client.login(token);
}
module.exports = color;
