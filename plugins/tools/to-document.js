exports.default = {
   names: ['Maker'],
   tags: ['todocument'],
   command: ['todocument', 'todoc', 'todokument'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      mime,
      quoted
   }) => {
      if (!text) return m.reply('Kirim Media / Balas Media nya dan Masukan Masukan Nama File Nya contoh ' + `${prefix+command} gambarku`)
      const name = text.trim()
      m.reply(loading);
      const media = await quoted.download();
      if (/audio/.test(mime) || m.mtype === 'audioMessage') {         
         conn.sendFile(m.chat, media, '', m, {
            document: true,
            fileName: name + '.mp3',
            mimetype: 'audio/mpeg'
         })
      } else if (/video/.test(mime) || m.mtype === 'videoMessage') {         
         conn.sendFile(m.chat, media, '', m, {
            document: true,
            fileName: name + '.mp4',
            mimetype: 'video/mp4'
         })
      } else if (/image/.test(mime) || m.mtype === 'imageMessage') {         
         conn.sendFile(m.chat, media, '', m, {
            document: true,
            fileName: name + '.jpg',
            mimetype:  'image/jpg'
         })
      } else {
         return m.reply(`Balas atau kirim media dengan caption ${prefix+command} namafile contoh\n${prefix+command} gambarku`)
      }
   },
   limit: 3,
   premium: false
};
