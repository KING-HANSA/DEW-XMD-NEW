exports.default = {
   names: ['Tools'],
   tags: ['getpp'],
   command: ['getpp'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (m?.quoted?.sender) {
         m.react('🕒')
         const data = await conn.profilePictureUrl(m.quoted.sender, 'image').catch(() => 'https://qu.ax/KfPtl.jpeg')
         const file = await Format.streamFile(conn, data, 'png', m);
         const media = await Format.HD2(file)
         conn.sendFile(m.chat, media, '', m);
      } else if (text) {
         m.react('🕒')
         const num = `${text.replace("@", "").replace("-", "").replace("-", "").replace("+62 ", "62").trim()}@s.whatsapp.net`
         const data = await conn.profilePictureUrl(num, 'image').catch(() => 'https://qu.ax/KfPtl.jpeg')
         const file = await Format.streamFile(conn, data, 'png', m);
         const media = await Format.HD2(file)
         conn.sendFile(m.chat, media, '', m);
      } else if (!text || !m?.quoted?.sender) {
         return m.reply(`reply to one of his messages if you want to pp getpp him or tag him or enter his number \nexample: ${prefix+command} @tag\nor: ${prefix+command} 94xxxx`);
      }
   },
   limit: 2
};