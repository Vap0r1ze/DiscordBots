# DiscordBots
In order to even use the library, you must first get an api token. These can be obtained by going to the [API site](https://bots.discord.pw/api).

---

First, you must create an instance of the module by doing this:
```js
const DiscordBots = require('discordbots')
const token = 'API TOKEN'
const dbots = new DiscordBots(token)
```

---

### getBotInfo

```js
dbots.getBotInfo(botid)
```
| Parameter | Description |
| :---: | :---: |
| botid | The user ID of the bot |

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>}

---

### getBotStats

```js
dbots.getBotStats(botid)
```
| Parameter | Description |
| :---: | :---: |
| botid | The user ID of the bot |

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>}

---

### getAllBots

```js
dbots.getAllBots()
```

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>}

---

### postBotStats

```js
dbots.postBotStats(stats)
```
| Parameter | Description |
| :---: | :---: |
| botid | The id of the bot |
| stats | An object containing the bots statistics |
| stats.server_count | The amount of guilds your bot is in |

##### Returns [null]()

---

### getUserInfo

```js
dbots.getUserInfo(userid)
```
| Parameter | Description |
| :---: | :---: |
| userid | The ID of the user |

##### Returns {[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
