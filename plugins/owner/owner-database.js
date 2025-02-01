const fs = require('fs');
exports.default = {
   names: ['Owner'],
   tags: ['database'],
   command: ['db', 'database', 'getdb'],
   start: async (m, {
      conn 
   }) => {
      const file = fs.readFileSync('./database.json');
      m.reply(`Wait while retrieving database file...`);    
      conn.sendMessage(m.chat, { document: file, caption: 'Successfully Backup Database', mimetype: 'application/json', fileName: 'database.json' }, { quoted: m });
   },
   owner: true
}
