const cheerio = require('cheerio');
const fetch = require('node-fetch');
const { lookup } = require('mime-types');
const { URL_REGEX } = require('@adiwajshing/baileys');
module.exports = {
   start: async (m, {
      conn,
      budy,
   }) => {
      const event = db.users[m.sender].event_cmd
      if (event.pinterest && event.pinterest.status) {
         if (budy.match(/^\s*1\s*$/)) {
            if (db.users[m.sender].limit < 0) return m.reply(mess.limit);
            const text = event.pinterest.search;
            const res = await Pinterest(text);
            const mime = await lookup(res);
            let pinterest = `${javi} 𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓\n`
            pinterest += `Result From ${text}\n\n`
            pinterest += `1. Lanjut\n2. Stop`
            m.reply(limit_message.replace('%limit', 1)).then(() => {
               db.users[m.sender].limit -= 1
               conn.sendFile(m.chat, res, pinterest.trim(), m);
            });
         } else if (budy.match(/^\s*2\s*$/)) {
            return m.reply('OK 👍').then(() => delete event.pinterest);
         }
      } else if (event.gimage && event.gimage.status) {
         if (budy.match(/^\s*1\s*$/)) {
            if (db.users[m.sender].limit < 0) return m.reply(mess.limit);
            const text = event.gimage.search;
            const res = await googleImage(text);
            const Index = Math.floor(Math.random() * res.length);
            const image = res[Index];
            let gimage = `${javi} 𝐆𝐎𝐎𝐆𝐋𝐄 𝐈𝐌𝐀𝐆𝐄\n`
            gimage += `🔎 *Pencarian:* ${text}\n`
            gimage += `🌎 *Source:* Google\n\n`
            gimage += `1. Lanjut\n2. Stop`
            m.reply(limit_message.replace('%limit', 1)).then(() => {
               db.users[m.sender].limit -= 1
               conn.sendFile(m.chat, image, gimage.trim(), m);
            });
         } else if (budy.match(/^\s*2\s*$/)) {
            return m.reply('OK 👍').then(() => delete event.gimage);
         }
      };
   }
};
async function shortUrl(url) {
   return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
};
async function Pinterest(query) {
   if (query.match(URL_REGEX)) {
      const res = await fetch('https://www.expertsphp.com/facebook-video-downloader.php', {
         method: 'post',
         body: new URLSearchParams(Object.entries({
            url: query
         }))
      })
      const $ = cheerio.load(await res.text())
      const data = $('table[class="table table-condensed table-striped table-bordered"]').find('a').attr('href')
      if (!data) throw 'Can\'t download post :/'
      return data
   } else {
      const res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`)
      const json = await res.json()
      const data = json.resource_response.data.results
      if (!data.length) throw `Query "${query}" not found :/`
      return data[~~(Math.random() * (data.length))].images.orig.url
   }
};
async function googleImage(query) {
   const data = await (await fetch(`https://www.google.com/search?q=${query}&tbm=isch`, {
      headers: {
         accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
         'accept-encoding': 'gzip, deflate, br',
         'accept-language': 'en-US,en;q=0.9,id;q=0.8',
         'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'
      }
   })).text();
   const $ = cheerio.load(data);
   const pattern = /\[1,\[0,"(?<id>[\d\w\-_]+)",\["https?:\/\/(?:[^"]+)",\d+,\d+\]\s?,\["(?<url>https?:\/\/(?:[^"]+))",\d+,\d+\]/gm;
   const matches = $.html().matchAll(pattern);
   const decodeUrl = (url) => decodeURIComponent(JSON.parse(`"${url}"`));
   return [...matches]
      .map(({
         groups
      }) => decodeUrl(groups === null || groups === void 0 ? void 0 : groups.url))
      .filter((v) => /.*\.jpe?g|png$/gi.test(v));
}