const request = require("request")

class DiscordBots {
  constructor (token) {
    this.token = token
  }

  getBotInfo (bot) {
    return new Promise((resolve, reject) => {
      request.get({
        json: true,
        uri: `https://bots.discord.pw/api/bots/${bot}`,
        headers: {
          'Authorization': this.token
        }
      }, (result, body, json) => {
        resolve(json)
      })
    })
  }

  getBotStats (bot) {
    return new Promise((resolve, reject) => {
      request.get({
        json: true,
        uri: `https://bots.discord.pw/api/bots/${bot}/stats`,
        headers: {
          'Authorization': this.token
        }
      }, (result, body, json) => {
        resolve(json)
      })
    })
  }

  getAllBots (bot) {
    return new Promise((resolve, reject) => {
      request.get({
        json: true,
        uri: `https://bots.discord.pw/api/bots`,
        headers: {
          'Authorization': this.token
        }
      }, (result, body, json) => {
        resolve(json)
      })
    })
  }

  postBotStats (bot, stats) {
    return new Promise((resolve, reject) => {
      request.post({
        uri: `https://bots.discord.pw/api/bots/${bot}/stats`,
        headers: {
          'Authorization': this.token
        },
        json: stats
      })
    })
  }

  getUserInfo (user) {
    return new Promise((resolve, reject) => {
      request.get({
        json: true,
        url: `https://bots.discord.pw/api/users/${user}`,
        headers: {
          'Authorization': this.token
        }
      }, (result, body, json) => {
        resolve(json)
      })
    })
  }
}

module.exports = DiscordBots