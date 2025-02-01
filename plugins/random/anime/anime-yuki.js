const fetch = require('node-fetch');
exports.default = {
   names: ['Anime'],
   tags: ['yuki'],
   command: ['yuki'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/yuki.json')).json();
      const yuki = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, yuki, {
         caption: '𝐘𝐔𝐊𝐈',
         quoted: m
      })
   },
   limit: true
}