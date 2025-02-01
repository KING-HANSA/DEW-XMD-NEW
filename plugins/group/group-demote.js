exports.default = {
   names: ['Group Menu'],
   tags: ['demote'],
   command: ['demote', 'dmt'],
   start: async (m, {
      conn,
      mentionUser
   }) => {
      if (mentionUser.length !== 0) {
         await conn.groupParticipantsUpdate(m.chat, [mentionUser[0]], "demote");
         m.reply(`Sekarang ${mentionUser} Tidak Lagi Jadi Admin`)
      } else {
         return m.reply(`Tag Admin Yang Mau Di demote`)
      }
   },
   group: true,
   admin: true
};