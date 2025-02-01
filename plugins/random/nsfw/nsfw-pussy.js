const fetch = require('node-fetch');
exports.default = {
   names: ['Anime Nsfw'],
   tags: ['pussy', 'pusy'],
   command: ['pussy', 'pusy'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/pussy.json')).json();      
      const pussy = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, pussy, {
         caption: '𝐏𝐔𝐒𝐒𝐘',
         quoted: m
      })
   },
   limit: 2
}