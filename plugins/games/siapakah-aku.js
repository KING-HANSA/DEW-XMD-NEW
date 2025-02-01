const rewards = {
   limit: 20,
   uang: 40
}
exports.default = {
   names: ['Games'],
   tags: ['siapakahaku'],
   command: ['siapakahaku', 'siapaaku', 'siapakah'],
   start: async (m, {
      conn,
      prefix,
      Format
   }) => {
      if (m.isBaileys) return
      if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Soal Yang Belum Terjawab!")
      const anu = await JSON_URL('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json');
      const result = anu[Math.floor(Math.random() * anu.length)];
      conn.adReply(m.chat, `*Siapakah Aku*\nSilahkan Jawab Soal Di Bawah Ini\n\nDeskripsi :\n*${result.soal}*\n\nWaktu : 60 Detik\nHadiah : 🛍 \n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💵`, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehh3CYKBlK2WAla6ZV7nH8pD3-fdj9Q_cLw&usqp=CAU", m).then(() => {
         siapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
         console.log(siapakahaku);
      });
      await Format.sleep(60000);
      if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
         console.log("Jawaban: " + result.jawaban)
         conn.adReply(m.chat, `📢 Waktu Habis\nJawaban: ${siapakahaku[m.sender.split('@')[0]]}`, setting.thumbnail, m)
         delete siapakahaku[m.sender.split('@')[0]]
      }
   }
};