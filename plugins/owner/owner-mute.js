exports.default = {
   names: ['Owner'],
   tags: ['mute', 'unmute'],
   command: ['mute', 'unmute'],
   start: async (m, {
      command
   }) => {
      if (command == 'mute') {
         db.chats[m.chat].mute = true
         m.reply('Successfully muted this chat');
      } else if (command == 'unmute') {
         db.chats[m.chat].mute = false
         m.reply('Successfully unmuted this chat');
      }
   },
   owner: true
};