const fileType = require('file-type')
exports.default = {
   names: ['Tools'],
   tags: ['q', 'quoted'],
   command: ['q', 'quoted'],
   start: async (m, {
      conn,
      store
   }) => {
      if (!m.quoted) return m.reply('balas pesan yang mengandung quoted');
      try {
         await store.loadMessage(m.chat, m.quoted.id).then(async (update) => {
            const sender = update.quoted.fakeObj.participant
            const caption = update.quoted.text || ''
            let buffer
            try {
               buffer = await conn.downloadMediaMessage(update.quoted)
            } catch {
               buffer = null
            }
            if (Buffer.isBuffer(buffer)) {               
               const type = (await fileType.fromBuffer(buffer))
               conn.sendFile(m.chat, buffer, caption, m, {
                  ptt: type.mime === 'audio/opus' ? true : false,
                  mentions: [sender, ...conn.parseMention(caption)]
               })
            } else {
               m.reply(caption)
            }
         })
      } catch {
         throw 'unable to get quoted or quoted has expired'
      }
   }
}