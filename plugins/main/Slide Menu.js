exports.default = {
   names: ['Main Menu'],
   tags: ['slide'],
   command: ['slidemenu'],
   start: async (m, {
      conn
   }) => {
      const caption = '> DEW-MD MAIN MENU'
      const media = cover
      //example media is cover you can replace with your photos
      //you can make multi galery and text each galleries
      const galery = [
         ['*◈━───────── DOWNLOAD MENU ─────────━◈*\n\n> Select Your Want Command And Type With Prefix\n\n╭──────────●●►\n│► APK\n│► FACEBOOK\n│► GITCLONE\n│► GOOGLEDRIVE\n│► INSTAGRAM\n│► MEDIAFIRE\n│►PINTREST\n│► TTMP3\n│► TIKTOK\n│► TITI\n│► TWITTER\n│► YTMP3\n│► YTMP4\n│► PLAY\n│► SONG\n│► LAGU\n│► YTSEARCH\n╰───────────●●►', '', cover, []], 
         ['*◈━───────── GROUP MENU ─────────━◈*\n\n> Select Your Want Command And Type With Prefix\n\n╭──────────●●►\n│► ABSEN\n│► ABSENSTART\n│► CEKABSEN\n│► TUTUPABSEN\n│► HAPUSABSEN\n│► DEMOTE\n│► KICK\n│► TENDANG\n│► KICKALL\n│► LINKGC\n│► LINK\n│► LINKGROUP\n│► GROUPOFF\n│► TUTUP\n│► GROUPON\n│► BUKA\n│► JADIADMIN\n│► PROMOTE\n│► RESETLINK\n│► REVOKE\n│► SETDESCGC\n│► SETDESCGC\n│► SETDESCRIPTIONGROUP\n│► SETNAMEGC\n│► SETNAMEGROUP\n│► TAGALL\n│► INFOGC\n│► INFOGROUP\n│► SETWELCOME\n│► SETBYE\n╰───────────●●►', '', media, []],
         ['*◈━───────── CONVERT MENU ─────────━◈*\n> Select Your Want Command And Type With Prefix\n╭──────────●●►\n│► BYELIMIT\n│► CEKSN\n│► HOUR\n│► CLAIMKUPON\n│► CLAIMUANG\n│► CLAIM\n│► TUKARKUPON\n│► KUPON\n│► LIMIT\n│► LAPOR\n│► MENFESS\n│► MFS\n│► TUTUPMENFESS\n│► AKHIRIMENFESS\n│► CATATAN\n│► PROFILE\n│► BALANCE\n│► TRANSFERLIMIT\n│► UNREG\n│► AFK\n│► DAFTAR\n╰───────────●●►', '', media, []],
         ['*◈━───────── LOGO MENU ─────────━◈*\n> Select Your Want Command And Type With Prefix\n╭──────────●●►\n│► SONG\n╰───────────●●►', '', media, []],
         ['*◈━───────── MAIN MENU ─────────━◈*\n> Select Your Want Command And Type With Prefix\n╭──────────●●►\n│► SONG\n╰───────────●●►', '', media, []],
         ['*◈━───────── GROUP MENU ─────────━◈*\n> Select Your Want Command And Type With Prefix\n╭──────────●●►\n│► SONG\n╰───────────●●►', '', media, []],
         ['*◈━───────── OWNER MENU ─────────━◈*\n> Select Your Want Command And Type With Prefix\n╭──────────●●►\n│► SONG\n╰───────────●●►', '', media, []],
         ['*◈━───────── ANIME MENU ─────────━◈*\n> Select Your Want Command And Type With Prefix\n╭──────────●●►\n│► SONG\n╰───────────●●►', '', media, []],
         ['*◈━───────── OTHER MENU ─────────━◈*\n> Select Your Want Command And Type With Prefix\n╭──────────●●►\n│► SONG\n╰───────────●●►', '', media, []]
      ]     
      conn.sendGalery(m.chat, caption, m, galery)
   }
};
