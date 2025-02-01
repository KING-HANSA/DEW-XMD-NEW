exports.default = {
   names: ['Group Menu'],
   tags: ['resetlink', 'revoke'],
   command: ['resetlink', 'revoke'],
   start: async (m, {
      conn
   }) => {
      await conn.groupRevokeInvite(m.chat)
      m.reply(`Sukses`)
   },
   group: true,
   admin: true
};
