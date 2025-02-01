exports.default = {
   names: ['Owner'],
   tags: ['addowner', 'delowner'],
   command: ['addowner', 'addown', 'delowner', 'delown'],
   start: async (m, {
      text,
      prefix,
      command
   }) => {
      if (/addowner|addown/.test(command)) {
         if (!text) return m.reply(`Enter the Number example\n${prefix+command} 94xxxx`);
         let num = `${text.replace("@", "").replace("-", "").replace("-", "").replace("+62 ", "62").trim()}`;
         setting.ownerNumber.push(num);
         save_setting()
         m.reply(`Success Adding ${num} as owner`);
      } else if (/delowner|delown/.test(command)) {
         if (!text) return m.reply(`Enter the number you want to remove from the owner list.`);
         let index = setting.ownerNumber.indexOf(text);
         if (index !== -1) {
            setting.ownerNumber.splice(index, 1);
            save_setting()
            m.reply(`Number ${text} successfully removed from owner list.`);
         } else {
            return m.reply(`Number ${text} not found in owner list.`);
         }
      }
   },
   owner: true
}