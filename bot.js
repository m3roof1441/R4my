const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
const fs = require("fs");
const prefix = "R";
client.on('ready', () => {
    client.user.setGame(`SooN | قريبأ")
    client.user.setStatus("dnd")
 });



client.login(process.env.BOT_TOKEN);
