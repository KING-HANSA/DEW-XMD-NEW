exports.default = {
   names: ['Main Menu'],
   tags: ['bost', 'boost', 'percepat'],
   command: ['bost', 'boost', 'percepat'],
   start: async (m) => {
      await m.reply('_Boosting..._').then(() => m.edReply('Sukses Mempercepat Bot', 500));
   }
}