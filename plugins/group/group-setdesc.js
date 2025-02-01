exports.default = {
   names: ['Group Menu'],
   tags: ['setdescgc', 'setdescriptiongrouo'],
   command: ['setdescgc', 'setdescriptiongroup'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (text) {
         await conn.groupUpdateDescription(m.chat, text);
         m.reply(`Deskripsi Group Telah Di Ubah Menjadi ${text}`);
      } else {
         return m.reply(`Masukan deskripsi group nya contoh: \n${prefix+command} Rules My Group`); 
      }
   },
   group: true,
   admin: true
};