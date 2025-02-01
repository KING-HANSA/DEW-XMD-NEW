exports.default = {
   names: ['Main Menu'],
   tags: ['owner'],
   command: ['owner', 'pemilik', 'creator'],
   start: async (m) => {
      let owner = `Here is my owner's number \nwa.me/${setting.contact} \nPlease Chat `
      m.reply(owner)
   }
};