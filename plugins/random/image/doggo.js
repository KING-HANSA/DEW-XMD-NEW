const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['doggo'],
   command: ['doggo'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/doggo.json')).json();
      const doggo = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, doggo, {
         caption: '𝐃𝐎𝐆𝐆𝐎',
         quoted: m
      })
   },
   limit: true
}