exports.default = {
   names: ['Tools'],
   tags: ['crop', 'resize'],
   command: ['crop', 'resize'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      quoted,
      mime,
      Format
   }) => {
      if (/image/.test(mime) || m.mtype === 'imageMessage') {
         if (!text) return m.reply(`balas atau kirim photo dengan text \ncontoh ${prefix+command} lebar panjang\ncontoh ${prefix+command} 480 480`)
         const s_1 = text.split(' ')[0]
         if (!s_1) throw `contoh ${prefix+command} lebar\ncontoh ${prefix+command} 480 480`
         const s_2 = text.split(' ')[1]
         if (!s_2) throw `contoh ${prefix+command} panjang\ncontoh ${prefix+command} 480 480`
         m.reply('Tunggu Sedang Di Proses..')
         const image = await conn.download(quoted)
         const data = await Format.crop(image, s_1, s_2)
         conn.sendFile(m.chat, data, 'Done!', m);
      } else {
         throw 'Photonya Mana ?'
      }
   },
   limit: 2
};
