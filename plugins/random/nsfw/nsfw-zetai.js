const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['zetai'],
   command: ['zetai'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/zetai.json')).json();      
      const zetai = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, zetai, {
         caption: '𝐙𝐄𝐓𝐀𝐈',
         quoted: m
      })
   },
   limit: true
}