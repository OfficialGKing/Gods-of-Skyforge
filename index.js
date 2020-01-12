const discord = require("discord.js");
const client = new discord.Client();
const token = "NjY1NjA5ODQzNDE5MTE5NjIz.XhoIEA.gfLSvBKKVMAzd-EL_JCfAbfhdvA";
client.on("ready", () =>{
  console.log("I'm online.");
});

client.login(token);