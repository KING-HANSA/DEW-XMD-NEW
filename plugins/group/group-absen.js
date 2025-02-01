exports.default = {
   names: ['Group'],
   tags: ['absen', 'absenstart', 'cekabsen', 'tutupabsen', 'hapusabsen'],
   command: ['absen', 'absenstart', 'cekabsen', 'tutupabsen', 'hapusabsen'],
   start: async (m, {
      conn,
      command,
      isAdmins
   }) => {
      if (command == 'absenstart') {
         if (!isAdmins) return m.reply('Hanya Admin Yang Dapat Memulai Absen');
         db.chats[m.chat].absen = true
         m.reply('Absen Di Mulai\nSekarang Member Bisa Absen Ketik .absen atau hadir');
      } else if (command == 'absen') {         
         if (!db.chats[m.chat].absen) return m.reply('absen belum di mulai perintahkan admin untuk memulai absen ketik .absenstart')
         if (db.chats[m.chat].absen_user.includes(m.sender)) return m.reply('kamu sudah absen ketik .cekabsen')       
         db.chats[m.chat].absen_user.push(m.sender)
         db.chats[m.chat].absen_count += 1
         let caption = db.chats[m.chat].absen_text
         caption += `• ${m.pushName || ""} @${m.sender.split('@')[0]}\n`
         db.chats[m.chat].absen_text = caption
         conn.adReply(m.chat, zw + ` *ABSEN*\n\nketik .absen atau hadir\nuntuk mengakhiri absen ketik .tutupabsen\n\nTotal Hadir: ${db.chats[m.chat].absen_count}\n\n` + db.chats[m.chat].absen_text, 'https://qu.ax/WSojV.jpeg', m, {
            mentions: conn.parseMention(db.chats[m.chat].absen_text)
         })
      } else if (command == 'tutupabsen' || command == 'hapusabsen') {
         if (!isAdmins) return m.reply('Hanya Admin Yang Dapat Menghapus Absen');
         db.chats[m.chat].absen = false
         db.chats[m.chat].absen_count = 0
         db.chats[m.chat].absen_user = []
         db.chats[m.chat].absen_text = ''
         m.reply('Sukses Mengakhiri Absen')
      } else if (command == 'cekabsen') {        
         conn.adReply(m.chat, zw + ` *ABSEN*\n\nketik .absen atau hadir\nuntuk mengakhiri absen ketik .tutupabsen\n\nTotal Hadir: ${db.chats[m.chat].absen_count}\n\n` + db.chats[m.chat].absen_text, 'https://qu.ax/WSojV.jpeg', m, {
            mentions: conn.parseMention(db.chats[m.chat].absen_text)
         })
      }
   }
}