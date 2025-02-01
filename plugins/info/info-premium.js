/**
 * pada plugin kasih premium atau tidak bebas suka suka engkau, mau bikin fitur plugin baru dan kasih premium: true 
 * true = premium (fitur hanya untuk user yang berstatus premium)
 * false = tidak (fitur itu bisa di gunakan untuk semua)
 */
exports.default = {
   names: ['Info'],
   tags: ['infopremium', 'listpremium'],
   command: ['infopremium', 'listpremium', 'listprem'],
   start: async (m, {
      conn
   }) => {
      let users = Object.entries(db.users).filter(user => user[1].premiumTime);
      let premiumUsers = users.map(([jid, user]) => {
         return {
            jid: jid,
            reason: user.premiumTime || ''
         };
      });
      let premiumList = premiumUsers.map(user => `${user.jid.split('@')[0]}\nPremium Up To: ${user.reason}`).join('\n');
      let text = `Here is the list of premium users ${setting.botName}\n`;
      text += `Total : ${premiumUsers.length}\n`;
      text += `User: ${premiumList ? '\n' + premiumList : ''}`;
      conn.adReply(m.chat, text, cover, m);
   }
};