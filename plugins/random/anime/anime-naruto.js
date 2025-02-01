const fetch = require('node-fetch');
exports.default = {
   names: ['Anime'],
   tags: ['naruto'],
   command: ['naruto'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/naruto.json')).json();
      const naruto = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, naruto, {
         caption: '𝐍𝐀𝐑𝐔𝐓𝐎',
         quoted: m
      })
   },
   limit: true
}