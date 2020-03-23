const fetch = require("node-fetch"),
	url = "https://bot-listweb.glitch.me/api/stats/";
async function apiPost(client, token) {
	if (!token) return console.log("Invalid token provided!");
	if (!client) return console.log("Make sure you provided your bot's instance");
	const headers = {
		"Content-Type": "application/json",
		authorization: `${token}`
	};
	if (client.guilds.cache !== undefined) {
		const body = {
			serverCount: client.guilds.cache.size
		};
		const response = await fetch(`${url}/${client.user.id}`, {
			menthod: "POST",
			headers: headers,
			body: JSON.stringify(body)
		});
		const jsonResponse = response.json();
		if (jsonResponse.success == true) return console.log("Server count posted!");
		else return console.log("Error while posting server count");
	} else if (client.guilds.cache == undefined) {
		const body = {
			serverCount: client.guilds.size
		};
		const response = await fetch(`${url}/${client.user.id}`, {
			menthod: "POST",
			headers: headers,
			body: JSON.stringify(body)
		});
		const jsonResponse = response.json();
		if (jsonResponse.success == true) return console.log("Server count posted!");
		else return console.log("Error while posting server count");
	} else return console.log("Make sure you provided your bot's instance");
}
module.exports = apiPost;