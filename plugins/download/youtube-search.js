const { ytsearch } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['ytsearch'],
   command: ['ytsearch', 'yts'], 
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Masukan Info Yang Ingin Di Cari\ncontoh ${prefix+command} laila canggung`);
      let { video, channel } = await ytsearch(text)      
      let sthumb = "https://qu.ax/OcWmv.jpeg"
      let teks = [...video, ...
         channel
      ].map(v => {
         switch (v.type) {
            case 'video':
               return `
      🎀 *${v.title}* 
      🔗 ${v.url}
      🕒 Duration: ${v.durationH}
      📅 Uploaded ${v.publishedTime}
      📈 ${v.view} views`.trim()
            case 'channel':
               return `
      ╭──────━• *CHANNEL*
      │🎀 *${v.channelName}* 
      │🔗 *${v.url}*
      │📛 _${v.subscriberH} Subscriber_
      │🎥 ${v.videoCount} video
      ┗──────━•`.trim()
         }
      }).filter(v => v).join('\n\n───────────────────\n\n');
      conn.adReply(m.chat, loading, cover, m).then(() => {
         conn.adReply(m.chat, `*Salin link youtube nya*\n*terus ketik .ytmp3 linknya*\n*Kalo Mau videonya ketik .ytmp4 linknya*\n\n${javi} 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐒𝐄𝐀𝐑𝐂𝐇 ${javi} \n\n` + teks.trim(), sthumb, m, {
            showAds: true
         })
      })
   },
   limit: true
};