const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['hentai'],
   command: ['hentai'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/hentai.json')).json();      
      const hentai = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, hentai, {
         caption: '𝐇𝐄𝐍𝐓𝐀𝐈',
         quoted: m
      })
   },
   limit: 2
}