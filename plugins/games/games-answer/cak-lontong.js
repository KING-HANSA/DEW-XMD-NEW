const rewards = {
   limit: 15,
   uang: 25
}
module.exports = {
   start: async (m, {
      conn,
      budy
   }) => {
      const lon = Math.floor(Math.random() * 3);
      const tong = ['❎ Salah', '😵 Kurang Tepat', '😪 Belum Benar'][lon];
      if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && budy && !budy.includes('.cak') && !budy.includes('.caklontong') && !m.isBaileys) {
         let jawaban = caklontong[m.sender.split('@')[0]]
         let deskripsi = caklontong_desc[m.sender.split('@')[0]]
         if (budy.toLowerCase() === jawaban) {
            await conn.adReply(m.chat, `Jawaban Benar 🎉 \n*${deskripsi}* \nKamu mendapatkan:\n+ ${rewards.limit} limit 🎟\n+ ${rewards.uang} uang 💰`, setting.thumbnail, m)
            db.users[m.sender].limit += rewards.limit
            db.users[m.sender].uang += rewards.uang
            delete caklontong[m.sender.split('@')[0]]
            delete caklontong_desc[m.sender.split('@')[0]]
         } else {
            return m.reply(tong)
         }
      }
   }
}