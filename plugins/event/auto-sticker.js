module.exports = {
   start: async (m, {
      conn,
      quoted,
      command
   }) => {
      if (autodl && m.mtype === 'imageMessage') {
         const ignore = ['remini', 'hd', 'sticker', 's', 'stiker', 'smeme'];
         if (ignore.includes(command) && !m.fromMe) return m.react('❎');
         if (!m.fromMe && db.users[m.sender].limit < 0) return m.reply(mess.limit);
         m.react('🐽');
         const buffer = await quoted.download();
         conn.sendImageAsSticker(m.chat, buffer, m, {
            packname: setting.botName,
            author: setting.footer
         }).then(() => {
            db.users[m.sender].limit -= 2
            m.reply(limit_message.replace('%limit', 2))
         })
      }
   }
}