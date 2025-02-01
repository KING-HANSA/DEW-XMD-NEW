exports.default = {
   names: ['Group Menu'],
   tags: ['jadiadmin', 'promote'],
   command: ['jadiadmin', 'promote'],
   start: async (m, {
      conn,
      mentionUser
   }) => {
      if (mentionUser.length !== 0) {
         await conn.groupParticipantsUpdate(m.chat, [mentionUser[0]], "promote");
         m.reply(`Sekarang ${mentionUser} Jadi Admin`)
      } else {
         return m.reply(`Tag Yang Mau Di Promote`)
      }
   },
   group: true,
   admin: true
};