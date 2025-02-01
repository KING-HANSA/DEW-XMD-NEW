const { ytmp4 } = require('ruhend-scraper');
exports.default = {
   names: ['Downloader'],
   tags: ['ytmp4'],
   command: ['ytmp4', 'ytv'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`Masukan Link Youtubenya ${prefix+command} https://youtu.be/MvsAesQ-4zA`);
      m.reply(loading);
      const { title, video, author, description, duration, views, upload, thumbnail } = await ytmp4(text);      
      let caption = `${head("𝐘𝐎𝐔𝐓𝐔𝐁𝐄")} \n`
      caption += `⭔ *Title:* ${title}\n`
      caption += `⭔ *Author:* ${author}\n`
      caption += `⭔ *Description:* ${description}\n`
      caption += `⭔ *Duration:* ${duration}\n`
      caption += `⭔ *Views:* ${views}\n`
      caption += `⭔ *Upload:* ${upload}`
      conn.adReply(m.chat, title, thumbnail, m).then(async () => {
         await conn.sendFile(m.chat, video, {
            caption: caption,
            quoted: m
         })
      })
   },
   limit: 3,
   premium: false
}