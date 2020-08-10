const Discord = require('discord.js');
const bot = new Discord.Client();
require("fs");
const { TOKEN } = require("./lib/bot.json");
var { game } = require("./lib/bot.json");

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


  let jadwal = new cron.CronJob('00 44 05 * * *', () => {
    var piro = true;
    let yot = '$setgame Aku benci Nino'
    // This runs every day at 10:30:00, you can do anything you want
    let channel = bot.channels.get('730514615695310851');
    channel.send('tested');
    console.log(`terbacot ${Number(piro)}`)
  });
  
  jadwal.start()


bot.login(TOKEN);
