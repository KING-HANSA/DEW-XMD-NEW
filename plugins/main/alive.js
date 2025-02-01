exports.default = {
    names: ['DEW-XMD'],
    tags: ['info'],
    command: ['info', 'alive', 'al'],
    start: async (m, {
       conn,
       text,
       prefix,
       command,
       Format
    }) => {
       text = text || 'contoh'
       let caption = `*HI* @${m.sender.split('@')[0]}` // Pesan nya atau caption
       caption += `INFO OF DEW-XMD`
       let media = cover //media photo or video 
       //button disini hanya contoh saja dan bisa kalian buat sesuai keinginan dan terapkan ke plugins lain dan juga total buttonya
       let button = [
          ['REPO', '.repo'], //text atau command dari kita, tanda koma perhatikan biar ga eror
          ['OWNER', '.owner'],  //text dari user    
          ['BOT INFO', '.infobot'],
          ['MENU', '.menu'],
          ['MENU 2', '.menu2'],
          ['MENU 3', '.list'] 
       ] 
       conn.sendButton(m.chat, caption, media, m, button)
    }
 }
 
