module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      if (budy.match(/^\s*hadir\s*$/) && db.chats[m.chat].absen) {                   
         if (db.chats[m.chat].absen_user.includes(m.sender)) {
            return m.reply('kamu sudah absen ketik .cekabsen')
         } else if (!(db.chats[m.chat].absen_user.includes(m.sender))) {
            db.chats[m.chat].absen_user.push(m.sender)
            db.chats[m.chat].absen_count += 1
            const text = `• ${m.pushName || ""} @${m.sender.split('@')[0]}\n`
            db.chats[m.chat].absen_text += text
            conn.adReply(m.chat, zw + ` *ABSEN*\n\nketik .absen atau hadir\nuntuk mengakhiri absen ketik .tutupabsen\n\nTotal Hadir: ${db.chats[m.chat].absen_count}\n\n` + db.chats[m.chat].absen_text, 'https://qu.ax/WSojV.jpeg', m, {
               mentions: conn.parseMention(db.chats[m.chat].absen_text)
            })
         }
      }
   }
}