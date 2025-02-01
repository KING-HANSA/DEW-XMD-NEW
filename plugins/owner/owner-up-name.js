exports.default = {
   names: ['Owner'],
   tags: ['updatename', 'ubahnama'],
   command: ['updatename', 'ubahnama'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (!text) throw `Enter the profile name for example: \n${prefix+command} My Bot`
      await conn.updateProfileName(`${text}`);
      m.reply(`Successfully Changed Profile Name to ${text}`);
   },
   owner: true
};