exports.default = {
   names: ['Group Menu'],
   tags: ['linkgc', 'link', 'linkgroup'],
   command: ['linkgc', 'link', 'linkgroup'],
   start: async (m, {
      conn,
      groupName
   }) => {
      let url = await conn.groupInviteCode(m.chat)
      if (!url) return
      if (url) {
         url = 'https://chat.whatsapp.com/' + url;
         return m.reply(`Link Group ${groupName}\n${url}`);
      }
   },
   group: true,
   botAdmin: true
};