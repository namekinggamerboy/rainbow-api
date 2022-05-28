const Discord = require('discord.js');
const forEachTimeout = require('foreach-timeout');
const colors = ["#FF0000", "#00ff00", "#ffff00", "#00ffff", "#0099ff", "#ffffff", "#000001", "#8B4513", "#ff00ff"];
const stop = [];

module.exports = {
 async ready(client, time) {

if(!client) return console.log("make sure your give me bot client");
if(!time) return console.log("make sure your give Role color change Time (ms)");
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

},

async uplife(client, time) {

if(!client) return console.log("make sure your give me bot client");
if(!time) return console.log("make sure your give Role color change Time (ms)");
if(time < 12000) return console.log("make sure your give me high then 120000");
async function color () {
    forEachTimeout(colors, (color) => {
        client.guilds.forEach((guild) => {
                if (!stop.includes(guild.id)) {
                let role = guild.roles.find(e => e.name === 'Rainbow');
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

},

 blocklist(guild){
if(!Array.isArray(guild)) return console.error("make sure give me Array Type");
 guild.map(e => stop.push(e));
}

}
