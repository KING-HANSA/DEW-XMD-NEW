const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['bike'],
   command: ['bike'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/bike.json')).json();
      const bike = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, bike, {
         caption: '𝐁𝐈𝐊𝐄',
         quoted: m
      })
   },
   limit: true
}