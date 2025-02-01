exports.default = {
   names: ['Owner'],
   tags: ['myip', 'ip'],
   command: ['myip', 'ip'],
   start: async (m, {
      Format
   }) => {
      m.reply(await Format.ip_address())
   },
   owner: true
};
