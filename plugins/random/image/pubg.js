const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['pubg'],
   command: ['pubg'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/pubg.json')).json();
      const pubg = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, pubg, {
         caption: '𝐏𝐔𝐁𝐆',
         quoted: m
      })
   },
   limit: true
}