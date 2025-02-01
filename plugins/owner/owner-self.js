exports.default = {
   names: ['Owner'],
   tags: ['self', 'public'],
   command: ['self', 'public'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (command == 'public') {
         save.global('global.self = true', 'global.self = false');
         m.reply(`Self mode successfully turned off. Now everyone can access this bot`);         
      } else if (command == 'self') {
         save.global('global.self = false', 'global.self = true');
         m.reply(`Self mode successfully activated. Only me, owner and premium can access this bot`);         
      }
   },
   owner: true
};
