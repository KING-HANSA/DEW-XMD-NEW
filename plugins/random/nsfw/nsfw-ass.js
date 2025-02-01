const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['ass'],
   command: ['ass'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/ass.json')).json();      
      const ass = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, ass, {
         caption: '𝐀𝐒𝐒',
         quoted: m
      })
   },
   limit: true
}