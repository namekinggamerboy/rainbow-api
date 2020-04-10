const fetch = require("node-fetch"),
  url = "https://bot-listweb.glitch.me/api/stats/";
class botWeblist {
  constructor(token, client) {
    this.token = token;
    this.client = client;
    this.client.on("ready", () => {
      this.apiPost();
    });
  }

  async apiPost() {
    if (!this.token) return console.log("[BLW] Invalid token provided!");
    if (!this.client)
      return console.log("[BLW] Make sure you provided your bot's instance");
    const headers = {
      "Content-Type": "application/json",
      authorization: `${this.token}`
    };
    if (this.client.guilds.cache !== undefined) {
      const body = {
        server_count: this.client.guilds.cache.size
      };
      const response = await fetch(`${url}/${this.client.user.id}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });
      const jsonResponse = await response.json();
      if (jsonResponse.success == true)
        return console.log("[BLW] Server count posted!");
      else return console.log("[BLW] Error while posting server count");
    } else if (this.client.guilds.cache == undefined) {
      const body = {
        server_count: this.client.guilds.size
      };
      const response = await fetch(`${url}/${this.client.user.id}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      });
      const jsonResponse = await response.json();
      if (jsonResponse.success == true)
        return console.log("[BLW] Server count posted!");
      else return console.log("[BLW] Error while posting server count");
    } else return console.log("[BLW] Make sure you provided your bot's instance");
  }
}
module.exports = botWeblist;
