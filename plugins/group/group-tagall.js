exports.default = {
   names: ['Group Menu'],
   tags: ['tagall'],
   command: ['tagall'],
   start: async (m, {
      conn,
      text,
      participants
   }) => {
      let teks_tagall = `〘 *Tag All* 〙\n\nDi Perintahkan Oleh\n@${m.sender.split('@')[0]}\n\nKata Dia\n${text ? text : ''}\n\n`;
      let mem = [];
      participants.map(i => mem.push(i.id))
      for (let mem of participants) {
         teks_tagall += `• @${mem.id.split('@')[0]}\n`;
      }      
      await conn.adReply(m.chat, teks_tagall, cover, m, {
         showAds: true,
         mentions: mem
      })
   },
   group: true,
   admin: true
};