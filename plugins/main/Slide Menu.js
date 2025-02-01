exports.default = {
   names: ['Main Menu'],
   tags: ['slide'],
   command: ['menu', 'help', 'allmenu', 'command', 'm', 'all', 'meni'],
   start: async (m, {
      conn
   }) => {
      const caption = '> DEW-MD MAIN MENU'
      const owner = 'https://qu.ax/MMlLY.jpg' 
      const group = 'https://qu.ax/LsyNC.jpg'
      const tools = 'https://qu.ax/uiNZo.jpg'
      const convert = 'https://qu.ax/SyqfJ.jpg'
      const anime = 'https://qu.ax/DloDS.jpg'
      const download = 'https://qu.ax/UpjDa.jpg'
      const games = 'https://qu.ax/WaVvW.jpg'
      const internet = 'https://qu.ax/XstzN.jpg'
      const main = 'https://qu.ax/hUnPh.jpg'
      //example media is cover you can replace with your photos
      //you can make multi galery and text each galleries
      const galery = [
         ['*◈━───────── OWNER MENU ───────────━◈*\n\n> Select Your Want Command And Type With Prefix\n\n╭──────────●●►\n│► ADDLIMIT\n│► ADDPREM\n│► BANNED\n│► BAN\n│► BROADCAST\n│► DATABASE\n│► GETPLUGINS\n│► JOIN\n│► MUTE\n│► UNMUTE\n│► ADDOWNER\n│► DELOWNER\n│► ADDLIST\n│► BACKUP\n│► RESTORE\n│► RESTART\n│► SELF\n│► PUBLIC\n│► SETTHUMB\n│► SETCOVER\n│► SETPPGC\n│► UNBAN\n│► MYIP\n│► SETPPBOT\n│► SETNAMEBOT\n│► SETNAMEOWNER\n│► SETMENU\n│► SETPREFIX\n│► SETFOOTER\n│► RAM\n│► SETLINK\n│► SETGROUPMODE\n╰───────────●●►', '', owner, []],
         ['*◈━───────── GROUP MENU ───────────━◈*\n\n> Select Your Want Command And Type With Prefix\n\n╭──────────●●►\n│► ABSEN\n│► ABSENSTART\n│► CEKABSEN\n│► TUTUPABSEN\n│► HAPUSABSEN\n│► DEMOTE\n│► KICK\n│► TENDANG\n│► KICKALL\n│► LINKGC\n│► LINK\n│► LINKGROUP\n│► GROUPOFF\n│► TUTUP\n│► GROUPON\n│► BUKA\n│► JADIADMIN\n│► PROMOTE\n│► RESETLINK\n│► REVOKE\n│► SETDESCGC\n│► SETDESCGC\n│► SETDESCRIPTIONGROUP\n│► SETNAMEGC\n│► SETNAMEGROUP\n│► TAGALL\n│► INFOGC\n│► INFOGROUP\n│► SETWELCOME\n│► SETBYE\n╰───────────●●►', '', group, []],
         ['*◈━───────── TOOLS MENU ───────────━◈*\n\n> Select Your Want Command And Type With Prefix\n\n╭──────────●●►\n│► DELETE\n│► ON\n│► OFF\n│► GETXIF\n│► RVO\n│► READVIEWONCE\n│► LIHAT\n│► REMINI\n│► HD\n│► TTS\n│► GTTS\n│► BLEND\n│► BLENDAUDIO\n│► BLENDVIDEO\n│► CROP\n│► RESIZE\n│► CUTAUDIO\n│► CUTVIDEO\n│► FUSE\n│► FUSEMEDIA\n│► GETPP\n│► TOAUDIO\n│► TRANSLATE\n│► TOURL\n│► UPLOAD\n╰───────────●●►', '', tools, []],
         ['*◈━─────────── CONVERT MENU ─────────━◈*\n\n> Select Your Want Command And Type With Prefix\n\n╭──────────●●►\n│► BYELIMIT\n│► CEKSN\n│► HOUR\n│► CLAIMKUPON\n│► CLAIMUANG\n│► CLAIM\n│► TUKARKUPON\n│► KUPON\n│► LIMIT\n│► LAPOR\n│► MENFESS\n│► MFS\n│► TUTUPMENFESS\n│► AKHIRIMENFESS\n│► CATATAN\n│► PROFILE\n│► BALANCE\n│► TRANSFERLIMIT\n│► UNREG\n│► AFK\n│► DAFTAR\n╰───────────●●►', '', convert, []],
         ['*◈━───────── ANIME MENU ───────────━◈*\n\n> Select Your Want Command And Type With Prefix\n\n╭──────────●●►\n│► HUSBU\n│► LOLI\n│► MEGUMIN\n│► NARUTO\n│► SHOTA\n│► WAIFU\n│► YUKI\n│► ASS\n│► BDSM\n│► BLOWJOB\n│► EBA\n│► HENTAI\n│► MANSTRUBATION\n│► MANSTRU\n│► MILF\n│► NEKO\n│► NEKO2\n│► PUSSY\n│► YURI\n│► ZETAI\n╰───────────●●►', '', anime, []],	
         ['*◈━───────── DOWNLOAD MENU ────────━◈*\n\n> Select Your Want Command And Type With Prefix\n\n╭──────────●●►\n│► APK\n│► FACEBOOK\n│► GITCLONE\n│► GOOGLEDRIVE\n│► INSTAGRAM\n│► MEDIAFIRE\n│►PINTREST\n│► TTMP3\n│► TIKTOK\n│► TITI\n│► TWITTER\n│► YTMP3\n│► YTMP4\n│► PLAY\n│► SONG\n│► LAGU\n│► YTSEARCH\n╰───────────●●►', '', download, []],
         ['*◈━───────── GAMES MENU ───────────━◈*\n\n> Select Your Want Command And Type With Prefix\n\n╭──────────●●►\n│► CAKLONTONG\n│► FAMILY100\n│► BOOM\n│► BOMB\n│► KUISMATH\n│► MATH\n│► MATEMATIKA\n│► SIAPAKAHAKU\n│► SPIN\n│► SUSUNKATA\n│► TTT\n│► TICTACTOE\n│► TEKATEKI\n│► TEBAKGAME\n╰───────────●●►', '', games, []],
         ['*◈━───────── INTERNET MENU  ───────━◈*\n\n> Select Your Want Command And Type With Prefix\n\n╭──────────●●►\n│► AI\n│► CHATGPT\n│► OPENAI\n│► LLAMA\n│► BINGIMG\n│► BINGIMAGE\n│► FETCH\n│► GOOGLEIMAGE\n│► GIMAGE\n│► GAMEBAR\n│► IMAGE\n│► CERPEN\n│► CERITAPENDEK\n│► LYRIC\n│► LIRIK\n╰───────────●●►', '', internet, []],  
         ['*◈━───────── MAIN MENU ────────────━◈*\n\n> Select Your Want Command And Type With Prefix\n\n╭──────────●●►\n│► BOST\n│► BOOST\n│► PERCEPAT\n│► BUTTON\n│► HYD\n│► LIST\n│► OWNER\n│► MENU\n│► INFO\n│► PREMIUM\n│► PRICE\n│► SETWA\n│► INFOBOT\n│► STATUSBOT\n│► SHOP\n╰───────────●●►', '', main, []]
           ]     
      conn.sendGalery(m.chat, caption, m, galery)
   }
};
