exports.default = {
   names: ['Kalkulator'],
   tags: ['tambah', 'kurang', 'kali', 'bagi'],
   command: ['tambah', 'kurang', 'kali', 'bagi'],
   start: (m, {
      conn,
      prefix,
      text,
      command
   }) => {
      if (command == 'tambah') {
         if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
         var num_one = text.split(' ')[0];
         var num_two = text.split(' ')[1];
         if (!num_one) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
         if (!num_two) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
         var nilai_one = Number(num_one);
         var nilai_two = Number(num_two);
         m.reply(`${nilai_one + nilai_two}`);
      } else if (command == 'kurang') {
         if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
         var num_one = text.split(' ')[0];
         var num_two = text.split(' ')[1];
         if (!num_one) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
         if (!num_two) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
         var nilai_one = Number(num_one);
         var nilai_two = Number(num_two);
         m.reply(`${nilai_one - nilai_two}`);
      } else if (command == 'kali') {
         if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
         var num_one = text.split(' ')[0];
         var num_two = text.split(' ')[1];
         if (!num_one) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
         if (!num_two) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
         var nilai_one = Number(num_one);
         var nilai_two = Number(num_two);
         m.reply(`${nilai_one * nilai_two}`);
      } else if (command == 'bagi') {
         if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
         var num_one = text.split(' ')[0];
         var num_two = text.split(' ')[1];
         if (!num_one) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
         if (!num_two) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
         var nilai_one = Number(num_one);
         var nilai_two = Number(num_two);
         m.reply(`${nilai_one / nilai_two}`);
      }
   },
   limit: true,
   premium: false
};