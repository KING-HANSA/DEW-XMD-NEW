exports.default = {
   names: ['Group Menu'],
   tags: ['kick', 'tendang'],
   command: ['kick', 'tendang', '-'],
   start: async (m, {
      conn,
      mentionUser,
      mentionByReply
   }) => {
      if (mentionUser.length !== 0 || mentionByReply) {
         await conn.groupParticipantsUpdate(m.chat, [mentionUser[0]], "remove");
         m.reply(`Berhasil Menghapus ${mentionUser} Dari Grup Ini`)
      };
   },
   group: true,
   admin: true
};