exports.default = {
   names: ['Internet'],
   tags: ['ai', 'chatgpt', 'openai'],
   command: ['ai', 'chatgpt', 'openai'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (!text) return m.reply(`contoh ${prefix+command} apa kabar?`);
      m.react('🕒');
      const data = await JSON_URL('https://api.riskimivan.my.id/api/ai?prompt=' + text);
      conn.adReply(m.chat, loading, cover, m).then(() => {
         conn.adReply(m.chat, data, cover, m, {
            showAds: true
         });
      });
   },
   limit: 2
}