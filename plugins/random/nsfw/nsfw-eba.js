const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['eba'],
   command: ['eba'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/eba.json')).json();      
      const eba = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, eba, {
         caption: '𝐄𝐁𝐀',
         quoted: m
      })
   },
   limit: true
}