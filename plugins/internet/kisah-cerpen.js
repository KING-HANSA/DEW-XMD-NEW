const fetch = require('node-fetch');
exports.default = {
   names: ['Internet'],
   tags: ['cerpen', 'ceritapendek'],
   command: ['cerpen', 'ceritapendek'],
   start: async (m, {
      conn
   }) => {       
      const data = await (await fetch(`https://api.lolhuman.xyz/api/cerpen?apikey=e359705ed4bfec87ea9f276d`)).json();
      const response = data.result;
      const title = response.title;
      const creator = response.creator;
      const cerpen = response.cerpen;
      conn.adReply(m.chat, loading, cover, m).then(() => {      
         conn.adReply(m.chat, `Judul: ${title}\nPengarang: ${creator}\n\n${cerpen}`, cover, m, {
            showAds: true
         });
      });
   },
   limit: 2
}