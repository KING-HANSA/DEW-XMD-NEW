const fetch = require('node-fetch');
exports.default = {
   names: ['Anime'],
   tags: ['husbu'],
   command: ['husbu'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/husbu.json')).json();
      const husbu = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, husbu, {
         caption: '𝐇𝐔𝐒𝐁𝐔',
         quoted: m
      })
   },
   limit: true
}