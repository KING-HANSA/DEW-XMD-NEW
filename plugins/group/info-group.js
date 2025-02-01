exports.default = {
   names: ['Group Menu'],
   tags: ['infogc', 'infogroup'],
   command: ['infogc', 'infogroup'],
   start: (m, {
      conn,
      groupName,
      participants,
      groupAdmins
   }) => {
      let Info = ` ${javi} *INFO GROUP* ${javi}\n`
      Info += ` • *ID:* ${m.chat}\n`
      Info += ` • *Nama Grup:* ${groupName}\n`
      Info += ` • *Total Member:* ${participants.length}\n`
      Info += ` • *Total Admin:* ${groupAdmins.length}`
      conn.adReply(m.chat, Info, cover, m);
   },
   group: true
};