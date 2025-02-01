const rewards = {
   limit: 25,
   uang: 50
}
exports.default = {
   names: ['Games'],
   tags: ['tebakbendera'],
   command: ['tebakbendera'],
   start: async (m, {
      conn,
      Format
   }) => {
      if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Soal Yang Belum Diselesaikan!");
      const anu = await JSON_URL('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json');
      const result = anu[Math.floor(Math.random() * anu.length)]
      conn.sendFile(m.chat, result.img , {
         caption : `*Silahkan Jawab Pertanyaan Berikut*\nWaktu : 1 menit\n\nHadiah 🎁\n+${rewards.limit} limit 🎟\n+${rewards.uang} uang 💰 `,
         quoted : m
      }).then(() => {
         tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase();console.log(tebakbendera);
      })
      await Format.sleep(60000);
      if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
         conn.adReply(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[m.sender.split('@')[0]]}\n`, result.img, m);
         delete tebakbendera[m.sender.split('@')[0]]
      }
   }
};