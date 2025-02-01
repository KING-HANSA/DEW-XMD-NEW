const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['ryujin'],
   command: ['ryujin'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/ryujin.json')).json();
      const ryujin = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, ryujin, {
         caption: '𝐑𝐘𝐔𝐉𝐈𝐍',
         quoted: m
      })
   },
   limit: true
}