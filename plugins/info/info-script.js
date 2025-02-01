exports.default = {
   names: ['Info'],
   tags: ['script'],
   command: ['script', 'sc', 'repo', 'repositori'],
   start: (m, {
      conn
   }) => {
      const script = 'Using This Base Script \n\nhttps://github.com/KING-HANSA/DEW-XMD-ZEERO'
      conn.adReply(m.chat, script, cover, m)
   }
};