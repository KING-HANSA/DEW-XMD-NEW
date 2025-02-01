exports.default = {
   names: ['Tools'],
   tags: ['on', 'off'],
   command: ['on', 'off', 'enable', 'disable'],
   start: async (m, {
      conn,
      text,
      prefix,      
      command,
      groupName,
      isOwner,
      isAdmins
   }) => {
      const cmd_on = ['on', 'enable']
      const cmd_off = ['off', 'disable']
      const owner_admin = isOwner || isAdmins
      const v = `${prefix + command} `
      let caption = `*List Options ${command}*\n*Contoh:* \n\n`
      caption += v + `welcome \n`
      caption += v + `antilink \n`
      caption += v + `viewonce / once \n`
      caption += v + `autodl / autodown \n`
      caption += v + `autobackup \n`
      caption += v + `antitoxic / toxic \n`
      caption += v + `anticall \n`
      caption += v + `autoreadsw / readsw\n`
      caption += v + `autobio / bio\n`
      caption += v + `antispam / spam`
      if (!text) return m.reply(caption);
      switch (text.toLowerCase()) {
         case 'welcome': {
            if (!m.isGroup) return m.reply(mess.OnlyGroup);
            if (!owner_admin) return m.reply(mess.GrupAdmin);
            if (cmd_on.includes(command)) {
               db.chats[m.chat].welcome = true
               m.reply(`Welcome Berhasil Di Nyalakan Di Group ${groupName}`)
            } else if (cmd_off.includes(command)) {
               db.chats[m.chat].welcome = false
               m.reply(`Welcome Berhasil Di Matikan Di Group ${groupName}`)
            }
         }
         break
         case 'antilink': {
            if (!m.isGroup) return m.reply(mess.OnlyGroup);
            if (!owner_admin) return m.reply(mess.GrupAdmin);
            if (cmd_on.includes(command)) {
               db.chats[m.chat].antilink = true
               m.reply(`Antilink berhasil diaktifkan di grup ${groupName}`);
            } else if (cmd_off.includes(command)) {
               db.chats[m.chat].antilink = false
               m.reply(`Antilink berhasil matikan di grup ${groupName}`);
            }
         }
         break
         case 'viewonce':
         case 'once': {
            if (!m.isGroup) return m.reply(mess.OnlyGroup);
            if (!owner_admin) return m.reply(mess.GrupAdmin);
            if (cmd_on.includes(command)) {
               db.chats[m.chat].viewOnce = true
               m.reply(`View Once berhasil diaktifkan di grup ${groupName}`);
            } else if (cmd_off.includes(command)) {
               db.chats[m.chat].viewOnce = false
               m.reply(`View Once berhasil dimatikan di grup ${groupName}`);
            }
         }
         break
         case 'autobackup': {         
            if (!isOwner) return m.reply(mess.OnlyOwner);
            if (cmd_on.includes(command)) {
               save.global('global.auto_backup = false', 'global.auto_backup = true');
               await m.reply('auto backup database berhasil di aktifkan\nrestarting...')
               reset()
            } else if (cmd_off.includes(command)) {
               save.global('global.auto_backup = true', 'global.auto_backup = false');
               await m.reply('auto backup database berhasil di matikan\nrestarting...')
               reset()
            }
         }
         break
         case 'anticall': {         
            if (!isOwner) return m.reply(mess.OnlyOwner);
            if (cmd_on.includes(command)) {
               save.global('global.anticall = false', 'global.anticall = true');
               m.reply('anti call berhasil di aktifkan')
            } else if (cmd_off.includes(command)) {
               save.global('global.anticall = true', 'global.anticall = false');
               m.reply('anti call database berhasil di matikan')
            }
         }
         break
         case 'autodl':
         case 'autodown': {
            if (!isOwner) return m.reply(mess.OnlyOwner);
            if (cmd_on.includes(command)) {
               save.global('global.autodl = false', 'global.autodl = true');
               m.reply(`auto download berhasil diaktifkan`);               
            } else if (cmd_off.includes(command)) {
               save.global('global.autodl = true', 'global.autodl = false');
               m.reply(`auto download berhasil matikan`);
            }
         }
         break
         case 'antitoxic':
         case 'toxic': {
            if (!m.isGroup) return m.reply(mess.OnlyGroup);
            if (!owner_admin) return m.reply(mess.GrupAdmin);
            if (cmd_on.includes(command)) {
               db.chats[m.chat].antiToxic = true
               m.reply(`Anti Toxic berhasil diaktifkan di grup ${groupName}`);
            } else if (cmd_off.includes(command)) {
               db.chats[m.chat].antiToxic = false
               m.reply(`Anti Toxic berhasil dimatikan di grup ${groupName}`);
            }
         }
         break
         case 'autoreadsw':
         case 'readsw': {
            if (!isOwner) return m.reply(mess.OnlyOwner);
            if (cmd_on.includes(command)) {
               db.settings.readsw = true
               m.reply(`auto readsw berhasil diaktifkan`);
            } else if (cmd_off.includes(command)) {
               db.settings.readsw = false
               m.reply(`auto readsw berhasil dimatikan`);
            }
         }
         break
         case 'autobio':
         case 'bio': {
            if (!isOwner) return m.reply(mess.OnlyOwner);
            if (cmd_on.includes(command)) {
               db.settings.autobio = true
               m.reply(`auto bio/status berhasil diaktifkan`);
            } else if (cmd_off.includes(command)) {
               db.settings.autobio = false
               await conn.updateProfileStatus(' ‎');
               m.reply(`auto bio/status berhasil dimatikan`);
            }
         }
         break
         case 'antispam':
         case 'spam': {
            if (!isOwner) return m.reply(mess.OnlyOwner);
            if (cmd_on.includes(command)) {
               db.settings.antispam = true
               m.reply(`anti spam berhasil diaktifkan`);
            } else if (cmd_off.includes(command)) {
               db.settings.antispam = false               
               m.reply(`anti spam berhasil dimatikan`);
            }
         }
         break
      }
   }
}