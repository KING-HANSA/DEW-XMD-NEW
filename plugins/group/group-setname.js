exports.default = {
   names: ['Group Menu'],
   tags: ['setnamegc', 'setnamegroup'],
   command: ['setnamegc', 'setnamegroup'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (text) {
         await conn.groupUpdateSubject(m.chat, text);
         m.reply(`Nama Group Telah Di Ubah Menjadi ${text}`);
      } else {
         return m.reply(`Masukan nama group nya contoh: \n${prefix+command} My Group`); 
      }
   },
   group: true,
   admin: true
};