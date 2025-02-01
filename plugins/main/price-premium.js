//Sesuaikan Kalian Saja :v run bot jadi bot , panel vps blabalabal
exports.default = {
   names: ['Main Menu'],
   tags: ['harga', 'premium', 'price', 'sewa'],
   command: ['rent', 'premium', 'price', 'sewa', 'sewabot'],
   start: async (m, {
      conn
   }) => {
      let price = `*📑 Premium & Rental Price List* \n ${setting.botName}\n\n`
      price += `*🎗 Premium Access*\n\n`
      price += `• 1 week 3000 bonus +1000 limit\n`
      price += `• 2 week 5000 bonus +3000 limit\n`
      price += `• 3 week 8000 bonus +5000 limit\n`
      price += `• 4 week 12.000 bonus +10000 limit++\n\n`
      price += `✅ *_priority your database will keep until time has run out_* \n*_Tell the Owner if you want to extend so that your database is kept safe._*\n`
      let sewa = `*🎭 Bot Join Group Access* \n*+bonus limit for tenants*\n\n`
      sewa += `• 1 week 4000 bonus +1000 limit (1 Group)\n`
      sewa += `• 2 week 8000 bonus +2000 limit (3 Groups Maximal)\n`
      sewa += `• 3 week 12000 bonus +5000 limit (5 Groups Maximal)\n`
      sewa += `• 4 week 15000 bonus +10000 limit++ (10 Groups Maximal)\n\n`
      let hub = `*📢 Contact Owner* \n@${setting.contact}\n`
      conn.adReply(m.chat, price + '\n' + sewa + hub, cover, m, {
         showAds: true,
         mentions: [`${setting.contact}@s.whatsapp.net`]
      });
   }
};
