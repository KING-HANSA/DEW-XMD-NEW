exports.default = {
   names: ['Main Menu'],
   tags: ['slide'],
   command: ['slide'],
   start: async (m, {
      conn
   }) => {
      const caption = 'Hy There'
      const media = cover
      //example media is cover you can replace with your photos
      //you can make multi galery and text each galleries
      const galery = [
         ['*◈━───────── DOWNLOAD MENU ─────────━◈*\n> Select Your Want Command And Type With Prefix\n╭──────────●●►\n│► SONG\n╰───────────●●►', '', cover, []], 
         ['*◈━───────── DOWNLOAD MENU ─────────━◈*\n> Select Your Want Command And Type With Prefix\n╭──────────●●►\n│► SONG\n╰───────────●●►', '', media, []],
         ['*◈━───────── DOWNLOAD MENU ─────────━◈*\n> Select Your Want Command And Type With Prefix\n╭──────────●●►\n│► SONG\n╰───────────●●►', '', media, []],
         ['*◈━───────── DOWNLOAD MENU ─────────━◈*\n> Select Your Want Command And Type With Prefix\n╭──────────●●►\n│► SONG\n╰───────────●●►', '', media, []],
         ['5', '', media, []]
      ]     
      conn.sendGalery(m.chat, caption, m, galery)
   }
};
