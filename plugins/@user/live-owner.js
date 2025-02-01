exports.default = {
   names: ['User Menu'],
   tags: ['lapor', 'tanyaowner'],
   command: ['lapor', 'tanyaowner'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) throw `untuk bertanya sesi live chat dengan owner bukan bot sekarang\nmasukan text nya contoh \n${prefix+command} halo owner tolong ke grup sewa Nexus NS sebentar ada yang di tanya`;
      const num = setting.contact + '@s.whatsapp.net'
      const teks = `Laporan Dari @${m.sender.split('@')[0]}\nText : ${text}`
      const caption = `Baik permintaan kamu akan segera di proses silahkan tunggu beberapa saat\nNomor: @${m.sender.split('@')[0]}\nNama: ${db.users[m.sender].name}\nWaktu: ${waktu.tanggal} ${waktu.jam} ${waktu.suasana}\nLaporan: ${text}`
      conn.adReply(m.chat, caption, cover, m, {         
         mentions: [m.sender]
      }).then(() => {
         conn.adReply(num, teks, cover, m, {
            mentions: [m.sender]
         })
      })
   }
};