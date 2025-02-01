exports.default = {
   names: ['User Menu'],
   tags: ['limit'],
   command: ['limit', 'ceklimit'],
   start: async (m, {
      conn
   }) => {
      const limitUser = db.users[m.sender].limit
      if (limitUser !== undefined) {
         const Limit = `Kamu Memiliki ${limitUser} Limit Tersisa`
         conn.adReply(m.chat, Limit, cover, m, {
            showAds: true
         })
      } else {
        return m.reply('Limit kamu tidak ditemukan silahkan .daftar');
      }
   }
};