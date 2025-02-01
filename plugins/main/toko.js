/**
 * ini untuk menampilkan produk kalian jika ada botnya buat fitur jualan
 * send with media use conn.sendFile or conn.sendList or conn.sendButton or whatever below just an example.
 * .addtoko or .deltoko 
 * bisa tambahin plugin baru kaya gini dan buat command nya sesuka kalian
 **/
exports.default = {
   names: ['Main Menu'],
   tags: ['toko', 'shop'],
   command: ['toko', 'shop'],
   start: async (m, {
      conn,
      prefix
   }) => {
      const toko = global.db.stores;
      const shops = Object.values(toko);
      let caption = `List of Stores or Merchandise\n${setting.botName}\n\n`;
      if (shops.length === 0) {
         caption += `No Merchandise In Store. \nPlease add a store by typing ${prefix}add support`;
      } else {
         shops.forEach(shop => {
            if (shop) {
               caption += `${shop}\n\n`; 
            }
         });
      }
      /* 
      conn.sendFile(m.chat, media, {
         caption: caption,
         quoted: m
      })
      or you can use sendList example in plugins/main/list.js
      */
      conn.adReply(m.chat, caption.trim(), cover, m, {
         showAds: true
      });             
   }
}