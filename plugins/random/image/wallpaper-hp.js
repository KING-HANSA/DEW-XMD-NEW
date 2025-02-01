const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['walhp', 'wallpaperhp'],
   command: ['walhp', 'wallpaperhp'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/walhp.json')).json();
      const walhp = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, walhp, {
         caption: '𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐇𝐏',
         quoted: m
      })
   },
   limit: true
}