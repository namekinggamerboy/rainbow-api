# rainbow api

How to use this API

*Discord.js*
```js
const rainbow = require("rainbow-api");
( async () => {
await rainbow.ready(client, 15000); // request Discord.js client ( must be discord.js version run v12) 
})();
```

If u use uplife API
```js
const rainbow = require("rainbow-api");
( async () => {
await rainbow.uplife(client, 15000); // request Discord.js client ( must be discord.js version run v12) 
})();
```

Only one role change color 
Role Name- `Rainbow`


Rainbow API also support blocklist
Hownto use
```js
const rainbow = require("rainbow-api");
rainbow.blocklist(["< guild 1 id>", "<guild 2 id>"]);
```

Blocklist only support array type
