const rewards = {
   limit: 15,
   uang: 30
}
exports.default = {
   names: ['Games'],
   tags: ['susunkata'],
   command: ['susunkata'],
   start: async (m, {
      conn,
      prefix,
      Format
   }) => {
      if (susunkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Soal Yang Belum Terjawab!")
      const json = await JSON_URL('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
      const result = json[Math.floor(Math.random() * json.length)];
      conn.adReply(m.chat, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.soal}\n\nTipe ${result.tipe}\nWaktu : 60 Detik\nHadiah 🛍\n${rewards.limit} limit 🎟 dan ${rewards.uang} uang 💵`, "https://lh3.googleusercontent.com/o2SA5NGKG3hTljpBZMnAPG2T7qdhhCk6gvY1tnn1fIm9JvTqnrkIiCL6_FOptI9WpA", m).then(() => {
         susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
         console.log(susunkata);
      });
      await Format.sleep(60000);
      if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {         
         console.log("Jawaban: " + result.jawaban)
         conn.adReply(m.chat, `📢 Waktu Habis\nJawaban: ${susunkata[m.sender.split('@')[0]]}`, setting.thumbnail, m);
         delete susunkata[m.sender.split('@')[0]]
      }
   }
}