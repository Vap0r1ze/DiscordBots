const superagent = require('superagent')

class DiscordBots {
  constructor (token) {
    this.token = token
  }

  apiRequest (method, path, body = {}) {
    return new Promise((resolve, reject) => {
      superagent[method](`https://bots.discord.pw/api${path}`)
      .set('Authorization', this.token)
      .send(body)
      .end((err, res) => {
        if (err) return reject(err);
        return resolve(res.body);
      });
    })
  }

  getBotInfo (bot) {
    return this.apiRequest('get', `/bots/${bot}`);
  }

  getBotStats (bot) {
    return this.apiRequest('get', `/bots/${bot}/stats`);
  }

  getAllBots (bot) {
    return this.apiRequest('/');
  }

  postBotStats (bot, stats) {
    return this.apiRequest('post', `/bots/${bot}/stats`, stats);
  }

  getUserInfo (user) {
    return this.apiRequest('get', `/users/${user}`)
  }
}

module.exports = DiscordBots
