# botlist-web-api

official module to interact with bot-listweb api

## Installation

`npm i bot-listweb-api`

## Example

### Example of posting server count with Discord.js

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const BW = require("bot-listweb-api");
const botlistApi = new BW("Your token", client);
```

### Example of posting server count manually with Discord.js

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const BW = require("bot-listweb-api");
const botlistApi = new BW("Your token", client);
botlistApi.apiPost();
```
