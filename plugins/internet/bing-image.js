const fetch = require('node-fetch');
exports.default = {
   names: ['Internet'],
   tags: ['bingimg', 'bingimage'],
   command: ['bingimg', 'bingimage'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`contoh ${prefix+command} pria di pantai`);
      m.react('🕒');
      const response = await (await fetch('https://widipe.com/bingimg?text=' + text)).json();
      const image = response.result;
      conn.adReply(m.chat, loading, cover, m).then(() => {
         for (let i of image) {
            conn.sendFile(m.chat, i, {
               caption: text,
               quoted: m
            })
         }
      })
   },
   limit: 5,
   register: true
}