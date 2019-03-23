const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Darks`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By :Darks  ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`RsG AkITo`,"http://twitch.tv/II_NotAmine_II")
client.user.setStatus("dnd")
});



client.login("NDE5MjMyNDE1MTU2OTI4NTEy.D22U0w.ID2Cf4KfQvht_-jZsLEI0_oAEMc");