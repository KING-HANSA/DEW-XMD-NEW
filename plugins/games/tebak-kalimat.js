const rewards = {
   limit: 20,
   uang: 50
}
exports.default = {
   names: ['Games'],
   tags: ['tebakkalimat'],
   command: ['tebakkalimat'],
   start: async (m, {
      conn,
      Format
   }) => {
      if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!");
      const anu = await JSON_URL('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json');
      const result = anu[Math.floor(Math.random() * anu.length)]
      conn.adReply(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n\nWaktu : 60 detik\nHadiah 🛍 \n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰`, 'https://files.catbox.moe/y21ty3.jpg', m).then(() => {
         tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase().trim();
         console.log(tebakkalimat);
      })
      await Format.sleep(60000);
      if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
         conn.adReply(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n`, setting.thumbnail, m);
         delete tebakkalimat[m.sender.split('@')[0]]
      }
   }
}