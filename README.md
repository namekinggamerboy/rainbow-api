# rainbow api

**How to install**

This API not add npmjs so some step following
1. Make sure your PC install github
2. Go to your package.json and add this
`"rainbow-api": "github:namekinggamerboy/rainbow-api`

Follow this step successfully install rainbow-api 


**How to use this API**

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
How to use-
```js
const rainbow = require("rainbow-api");
rainbow.blocklist(["< guild 1 id>", "<guild 2 id>"]);
```

Blocklist only support array type
