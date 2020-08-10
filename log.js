const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs'); // fs is the built-in Node.js file system module.
const guilds = require('./guilds.json'); // This path may vary.
const { TOKEN } = require("./lib/bot.json");
var { game } = require("./lib/bot.json");
const keepAlive = require('./server');


const cron = require('cron');



bot.on("ready", () => {
    console.log("yoo");
    function multiplegame() {

      let status = game

      let statusR = Math.floor(Math.random() * status.length);
      bot.user.setActivity(status[statusR] , {type : "Playing" , status : "Idle"});
    };
    setInterval(multiplegame, 20000); // avoid faster
  })

  bot.on(`message`, message => {
    if (message.author.bot) return; // If the message is by a bot return.
    if (!message.guild) return; // If the message isn't in a guild return.
    if (message.guild) {
        const msgLog = "Isn't bots\n"+message.author.username+" recently request👁️\n```"+message.guild.name+ " #"+message.channel.name+" "+ message.author.username+"#"+message.author.discriminator+" == "+message.content+"```"// You can change this to whatever you want.
        bot.channels.get(`742517977978765344`).send(msgLog); // Replace CHANNEL ID with the channel ID you want the logs to go to.
        return;
    }
})

keepAlive();
bot.login(TOKEN);
