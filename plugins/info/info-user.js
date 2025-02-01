exports.default = {
   names: ['Info'],
   tags: ['user', 'totaluser', 'pengguna'],
   command: ['user', 'totaluser', 'pengguna'],
   start: (m, {
      conn
   }) => {
      const user = Object.keys(db.users).length;
      const caption = `Total user ${setting.botName}\nat this time is ${user} pengguna`
      conn.adReply(m.chat, caption, cover, m);
   }
}