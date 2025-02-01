module.exports = {
   start: async (m, {
      conn,
      prefix,
      command,
      Format
   }) => {
      const is_mean = await Format.command_plugins();
      if (command && is_mean && !m.isBaileys) {
         const mean = await Format.command_mean(command, is_mean);
         if (mean && !(mean === command)) {
            if (prefix === undefined || prefix === '') {
               return false
            } else if (!(prefix === '')) {
               return m.reply(`*❗mungkin maksud kamu:*\n ${java} *${prefix+mean}*`)
            }      
         }
      }
   }
}