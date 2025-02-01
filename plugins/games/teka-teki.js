const rewards = {
   limit: 15,
   uang: 30
}
exports.default = {
   names: ['Games'],
   tags: ['tekateki'],
   command: ['tekateki'],
   start: async (m, {
      conn,
      Format
   }) => {
      if (tekateki.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Soal Yang Belum Diselesaikan!");
      const anu = await JSON_URL('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json');
      const result = anu[Math.floor(Math.random() * anu.length)]
      conn.adReply(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n*${result.soal}*\n\nWaktu : 60 detik\nHadiah 🎁\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰 `, 'https://www.my.wislah.com/wp-content/uploads/2023/08/Senarai-Teka-Teki.png', m).then(() => {
         tekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
         console.log(tekateki);
      })
      await Format.sleep(60000);
      if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
         conn.adReply(m.chat, `Waktu Habis\nJawaban:  ${tekateki[m.sender.split('@')[0]]}\n`, setting.thumbnail, m);
         delete tekateki[m.sender.split('@')[0]];
      }
   }
}