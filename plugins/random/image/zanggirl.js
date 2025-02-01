const fetch = require('node-fetch');
exports.default = {
   names: ['Image'],
   tags: ['zanggirl'],
   command: ['zanggirl'],
   start: async (m, {
      conn
   }) => {
      const data = await (await fetch('https://raw.githubusercontent.com/ruhend2001/database/main/random/zanggirl.json')).json();
      const zanggirl = pickRandom(data);
      conn.adReply(m.chat, loading, cover, m);
      conn.sendFile(m.chat, zanggirl, {
         caption: '𝐙𝐀𝐍𝐆𝐆𝐈𝐑𝐋',
         quoted: m
      })
   },
   limit: true
}