const Discord = require('discord.js');
const forEachTimeout = require('foreach-timeout');
const client = new Discord.Client();
const colors = ["#FF0000", "#00ff00", "#fffff00", "#00ffff", "#0099ff", "#ffffff", "#000001", "#8B4513", "#ff00ff"];
const stop = [];
async function apiPost(token) {
if(!token) return console.log("make sure your give me bot token");
async function color () {
    forEachTimeout(colors, (color) => {
        client.guilds.forEach((guild) => {
                if (!stop.includes(guild.id)) {
                let role = guild.roles.find(e => e.name === 'Rainbow');
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
client.login(token);
}
module.exports = apiPost
