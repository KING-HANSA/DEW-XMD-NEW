exports.default = {
   names: ['Info'],
   tags: ['listbanned', 'listban'],
   command: ['listbanned', 'listban'],
   start: async (m, {
      conn
   }) => {
      let users = Object.entries(db.users).filter(user => user[1].banned);
      let bannedUsers = users.map(([jid, user]) => {
         return {
            jid: jid,
            name: user.name,
            reason: user.bannedReason || 'no reason'
         };
      });
      let bannedList = bannedUsers.map(user => `Nomor: *${user.jid.split('@')[0]}*\nName: ${user.name || ''}\nAlasan Di Ban: ${user.reason}`).join('\n');
      let text = `Here is a list of banned users ${setting.botName}\n`;
      text += `Total : ${bannedUsers.length}\n`;
      text += `User: ${bannedList ? '\n' + bannedList : 'No users were banned.'}`;
      conn.adReply(m.chat, text, cover, m);
   }
};