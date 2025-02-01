const rewards = {
   limit: 20,
   uang: 40
}
exports.default = {
   names: ['Games'],
   tags: ['tebakkata'],
   command: ['tebakkata', 'teka'],
   start: async (m, {
      conn,
      Format
   }) => {
      if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Soal Yang Belum Diselesaikan!");
      const anu = await JSON_URL('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json');
      const result = anu[Math.floor(Math.random() * anu.length)]
      conn.adReply(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n*${result.soal}*\n\nWaktu : 60 detik\nHadiah 🎁\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰 `, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGef6IGK44lqaIIcestqDIbS9jG9Bs7McYmQ&usqp=CAU', m).then(() => {
         tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase();
         console.log(tebakkata);
      })
      await Format.sleep(60000);
      if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
         conn.adReply(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n`, setting.thumbnail, m);
         delete tebakkata[m.sender.split('@')[0]]
      }
   }
}