const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['tatasurya'],
   command: ['tatasurya'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/tatasurya.json')).json();
      const tatasurya = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, tatasurya, {
         caption: '𝐓𝐀𝐓𝐀 𝐒𝐔𝐑𝐘𝐀',
         quoted: m
      })
   },
   limit: true
}