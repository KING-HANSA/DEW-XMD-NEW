const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['walml', 'wallpaperml'],
   command: ['walml', 'wallpaperml'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/walml.json')).json();
      const walml = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, walml, {
         caption: '𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐇𝐏',
         quoted: m
      })
   },
   limit: true
}