exports.default = {
   names: ['Info'],
   tags: ['idgc'],
   command: ['idgc', 'id'],
   start: async (m) => {
      m.reply(m.chat);
   }
}