const { exec } = require('child_process');
exports.default = {
   names: ['Owner'],
   tags: ['getplugins'],
   command: ['gp', 'getplugins'],
   start: (m, {
      text,
      prefix,
      command
   }) => {
      if (!text) return m.reply(`contoh ${prefix+command} plugins/main/help.js or the plugins file you want to view`);
      let path = `${text}`;
      exec(`cat ${path}`, (x, y) => {
         if (x) return m.reply(`${path}\nThere isn't any`);
         if (y) return m.reply(y.toString());
      })      
   },
   owner: true
};