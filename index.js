const Discord = require('discord.js');
const forEachTimeout = require('foreach-timeout');
const colors = ["#FF0000", "#00ff00", "#fffff00", "#00ffff", "#0099ff", "#ffffff", "#000001", "#8B4513", "#ff00ff"];
async function apiPost(client, time) {

if(!client) return console.log("make sure your give me bot client");
if(!client) return console.log("make sure your give Role color change Time (ms)");
if(time < 12000) return console.log("make sure your give me high then 120000");
async function color () {
    forEachTimeout(colors, (color) => {
        client.guilds.cache.forEach((guild) => {
                if (!stop.includes(guild.id)) {
                let role = guild.roles.cache.find(e => e.name === 'Rainbow');
                if (role && role.editable) 
                    role.setColor(color);
            }  
        })
    }, time).then(color);
}
client.on('ready', () => {
  console.log("successfully rainbow API on"+client.user.tag);
   color();
});

}
module.exports = apiPost;
