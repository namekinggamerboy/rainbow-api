const Discord = require('discord.js');
const forEachTimeout = require('foreach-timeout');
const client = new Discord.Client();
const colors = ["#FF0000", "#00ff00", "#fffff00", "#00ffff", "#0099ff", "#ffffff", "#000001", "#8B4513", "#ff00ff"];
const stop = [];
async function apiPost(client) {
if(!token) return console.log("make sure your give me bot client");
async function color () {
    forEachTimeout(colors, (color) => {
        client.guilds.cache.forEach((guild) => {
                if (!stop.includes(guild.id)) {
                let role = guild.roles.cache.find(e => e.name === 'Rainbow');
                if (role && role.editable) 
                    role.setColor(color);
            }  
        })
    }, 10000).then(color);
}
client.on('ready', () => {
  console.log("successfully bot online"+client.user.tag);
   color();
});

}
module.exports = apiPost;
