const fetch = require('node-fetch');
exports.default = {
   names: ['Anime'],
   tags: ['waifu'],
   command: ['waifu'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/waifu.json')).json();
      const waifu = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, waifu, {
         caption: '𝐖𝐀𝐈𝐅𝐈',
         quoted: m
      })
   },
   limit: true
}