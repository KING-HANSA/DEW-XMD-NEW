exports.default = {
   names: ['Tools'],
   tags: ['delete'],
   command: ['delete', 'del', 'd'],
   start: async (m, {
      conn,
   }) => {
      await conn.removeMessage(m)
   },
   premium: true
};
