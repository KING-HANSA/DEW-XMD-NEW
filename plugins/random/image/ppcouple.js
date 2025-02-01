const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['ppcp', 'ppcouple'],
   command: ['ppcp', 'ppcouple'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/ppcp.json')).json();
      const ppcp = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, ppcp, {
         caption: '𝐏𝐏𝐂𝐏',
         quoted: m
      })
   },
   limit: true
}