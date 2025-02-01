const fs = require('fs');
const { exec } = require('child_process');
const rewards = {
   limit: 10,
   uang: 20
}
exports.default = {
   names: ['Games'],
   tags: ['tebakgambar'],
   command: ['tebakgambar'],
   start: async (m, {
      conn,
      prefix,
      Format
   }) => {
      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Soal Yang Belum Diselesaikan!")
      const results = await JSON_URL('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
      const result = results[Math.floor(Math.random() * results.length)];
      const ran = './tmp/' + Format.getRandom('.png');
      const image = await Format.streamFile(conn, result.img, 'webp', m);     
      exec(`ffmpeg -i ${image} ${ran}`, () => {
         const media = fs.readFileSync(ran);
         conn.sendFile(m.chat, media, {
            caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60 Detik\nHadiah 🎁 ${rewards.limit} limit dan ${rewards.uang} uang`,
            quoted: m
         }).then(() => {
            tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
            console.log(tebakgambar);
         })
      });
      await Format.sleep(60000);
      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
         console.log("Jawaban: " + result.jawaban)
         conn.adReply(m.chat, `Waktu Habis\nJawaban: ${tebakgambar[m.sender.split('@')[0]]}`, setting.thumbnail, m)
         delete tebakgambar[m.sender.split('@')[0]]
      }
   }
};
