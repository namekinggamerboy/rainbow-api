const fetch = require("node-fetch"),
	url = "https://bot-listweb.glitch.me/api/stats/";
async function apiPost(id, token) {
	if (!token) return console.log("[ BLW ] Invalid token provided!");
	if (!id) return console.log("[ BLW ] Make sure you provided your bot id❗");
	const headers = {
		"Content-Type": "application/json",
		authorization: `${token}`
	};
	if (client.guilds.cache !== undefined) {
		const body = {
			serverCount: client.guilds.cache.size
		};
		const response = await fetch(`${url}/${id}`, {
			menthod: "POST",
			headers: headers,
			body: JSON.stringify(body)
		});
		const jsonResponse = response.json();
		if (jsonResponse.success == true) return console.log("[ BLW ] Server count posted!");
		else return console.log("[ BLW ] Error while posting server count");
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
		if (jsonResponse.success == true) return console.log("[ BLW ] Server count posted!");
		else return console.log("[ BLW ] Error while posting server count");
	} else return console.log("[ BLW ]Make sure you provided your bot's instance");
}
module.exports = apiPost;
