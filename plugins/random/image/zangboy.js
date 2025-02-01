const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['zangboy'],
   command: ['zangboy'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/zangboy.json')).json();
      const zangboy = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, zangboy, {
         caption: '𝐙𝐀𝐍𝐆𝐁𝐎𝐘',
         quoted: m
      })
   },
   limit: true
}