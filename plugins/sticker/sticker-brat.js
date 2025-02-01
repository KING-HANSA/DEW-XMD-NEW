exports.default = {
   names: ['Maker'],
   tags: ['brat'],
   command: ['brat'],
   start: async (m, {
      conn,
      prefix,
      text,
      command,
      Format
   }) => {
      if (!text) return m.reply(`Kirim perintah ${prefix+command} text\ncontoh: ${prefix+command} ${setting.botName}`);
      const pack = setting.botName
      const own = setting.footer
      const result = await Format.brat(text);
      conn.adReply(m.chat, loading, cover, m).then(() => {            
         conn.sendImageAsSticker(m.chat, result, m, {
           packname: pack,
           author: `${own}\ncreated : \n${waktu.tanggal}\n${waktu.time} ${waktu.suasana}`
         })
      })
   },
   limit: true
}