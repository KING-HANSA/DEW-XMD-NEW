exports.default = {
   names: ['Owner'],
   tags: ['unbanned', 'unban'],
   command: ['unbanned', 'unban'],
   start: async (m, {
      text,
      prefix,
      command      
   }) => {
      if (!text) return m.reply(`Enter the Number. Example: ${prefix+command} nomor\nExample: ${prefix+command} 92xxxxx \n\nyou can see in .listbanned\n\nthen copy the number and paste it`);
      let _user = `${text.replace("@", "")}`
      let user = `${_user}@s.whatsapp.net`
      db.users[user].banned = false
      db.users[user].bannedReason = ''
      m.reply(`Nomor ${user} successfully removed from banned database\nNow That Number Can Use This Bot\nTo see the banned list type .listbanned`);
   },
   owner: true
};
