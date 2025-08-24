const fs = require('fs');

//~~~~~~~~~~~ 👑 Owner & Bot Identity ~~~~~~~~~~~//
global.owner = "923423706291";
global.developer = "923423706291";
global.bot = "";
global.devname = "💻 𝗦𝗛𝗔𝗛𝗜𝗗 𝗞𝗜𝗡𝗚-𝗠𝗗 ";
global.ownername = "👑 𝗦𝗛𝗔𝗛𝗜𝗗 𝗞𝗜𝗡𝗚-𝗠𝗗 ";
global.botname = "🤖 𝗦𝗛𝗔𝗛𝗜𝗗 𝗞𝗜𝗡𝗚-𝗠𝗗 ";
global.versisc = "2.0.0";
global.packname = "✨𝗦𝗛𝗔𝗛𝗜𝗗 𝗞𝗜𝗡𝗚-𝗠𝗗 ✨";

//~~~~~~~~~~~ 🌐 Social Links ~~~~~~~~~~~//
global.linkwa = "https://wa.me/923423706291";
global.linkyt = "https://www.youtube.com/@ShahidAli-p4x3v";
global.linktt = "https://tiktok.com/@userh2u030bbbv";
global.linktele = "https://t.me/+8ScPM6_F151hYjk0";

//~~~~~~~~~~~ ⚙️ Bot Settings ~~~~~~~~~~~//
global.prefix = ["", "!", ".", ",", "#", "/", "🎭", "〽️"];
global.autoRecording = false;
global.autoTyping = false;
global.autorecordtype = false;
global.autoread = false;
global.autobio = true;
global.anti92 = false;
global.owneroff = false;
global.autoswview = true;

//~~~~~~~~~~~ 🖼️ Bot Thumbnails ~~~~~~~~~~~//
global.thumbbot = "https://ibb.co/271BWjFd";
global.thumbown = "https://ibb.co/271BWjFd";

//~~~~~~~~~~~ 📣 Channel Info ~~~~~~~~~~~//
global.idchannel = "";
global.channelname = "🌐 SHAHID KING UPDATES";
global.channel = "";

//~~~~~~~~~~~ 💬 Custom Messages ~~~~~~~~~~~//
global.mess = {
  developer: "🛠️ *[ Developer Only ]*\nThis feature is only for bot developers!",
  owner: "👑 *[ Owner Only ]*\nOnly the owner of SHAHID KING-MD can use this!",
  group: "👥 *[ Group Only ]*\nThis command works in group chats only!",
  private: "📥 *[ Private Chat Only ]*\nUse this in a private chat!",
  admin: "🛡️ *[ Admin Only ]*\nThis command is for group admins only!",
  botadmin: "🤖 *[ Bot Must Be Admin ]*\nI need admin rights to do this!",
  wait: "⏳ *Please wait...*\nProcessing your request...",
  error: "❌ *Oops!*\nAn error occurred, please try again later.",
  done: "✅ *Done!*\nSuccessfully completed your request!"
};

//~~~~~~~~~~~ 🔄 Auto Reload on Save ~~~~~~~~~~~//
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
  delete require.cache[file];
  require(file);
});
