exports.default = {
   names: ['Owner'],
   tags: ['hapustoko', 'deltoko'],
   command: ['hapustoko', 'deltoko'],
   start: async (m, {
      text,
      prefix,
      User,
      command
   }) => {
      if (!text) return m.reply(`Masukkan nama toko yang ingin dihapus.\nContoh: ${prefix + command} nama toko\nContoh: ${prefix + command} toko1\n\nDaftar toko yang ada:\n${Object.keys(db.stores)}`.trim())
      let toko = text.trim();
      delete db.stores[toko]
      m.reply(`Berhasil menghapus toko dan dagangan yang ada di ${toko}`);
   },
   owner: true
};
