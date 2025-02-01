const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['cat'],
   command: ['cat'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/cat.json')).json();
      const cat = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, cat, {
         caption: '𝐂𝐀𝐓',
         quoted: m
      })
   },
   limit: true
}