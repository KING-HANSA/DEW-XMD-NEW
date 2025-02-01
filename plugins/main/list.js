exports.default = {
   names: ['Main Menu'],
   tags: ['list'],
   command: ['list', 'listmenu'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      //kalo mau buat list message contohnya kaya gini kostum sendiri ke plugin lain
      let caption = `👋 HI @${m.sender.split('@')[0]}\n` //your text
      caption += `This IS DEW-XMD LIS MENU`
      let sections = [{
         title: 'DEW-XMD-MENU',
         rows: [
            {
               title: 'Download Menu',
               description: `Total Command - 18`,
               id: '.menu2 downloader'
            },
            {
               title: 'Internet Menu',
               description: `Total Command -`,
               id: '.menu2 internet'
            },
            {
               title: 'Games Menu',
               description: `Total Command - 19`,
               id: '.menu2 games'
            },
            {
               title: 'Anime Menu',
               description: `Total Command -`,
               id: '.menu2 anime'
            },
            {
               title: 'Group Menu',
               description: `Total Command - 30`,
               id: '.menu2 group'
            },
            {
               title: 'Owner Menu',
               description: `Total Command -`,
               id: '.menu2 owner'
            },
            {
               title: 'Maker Menu',
               description: `Total Command -`,
               id: '.menu2 maker'
            },
            {
               title: 'Main Menu',
               description: `Total Command -`,
               id: '.menu2 main menu'
            },
            {
               title: 'Audio Menu',
               description: `Total Command -`,
               id: '.menu2 audio'
            },
            {
               title: 'Tools Menu',
               description: `Total Command - 26`,
               id: '.menu2 tools'
            },
            {
               title: 'User Menu',
               description: `Total Command -`,
               id: '.menu2 user menu'
            }
         ]
      }]
      let listMessage = {
         title: 'DEW-XMD-LIST',
         sections
      }
      /* isMedia: true 
       * with media
       * isMedia:
       * false just list
       */
      conn.sendList(m.chat, caption, listMessage, m, {
         isMedia: true,
         media: {
            image: { //image or video
               url: cover //your url example 'https://photo.jpg'
            }
         }
      })
   }
};
