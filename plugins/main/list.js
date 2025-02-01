exports.default = {
   names: ['Main Menu'],
   tags: ['list'],
   command: ['list'],
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
               description: `Total Command -`,
               id: '.ping'
            },
            {
               title: 'Search Menu',
               description: `Total Command -`,
               id: '.ping'
            },
            {
               title: 'Convert Menu',
               description: `Total Command -`,
               id: '.ping'
            },
            {
               title: 'Misc Menu',
               description: `Total Command -`,
               id: '.ping'
            },
            {
               title: 'Group Menu',
               description: `Total Command -`,
               id: '.ping'
            },
            {
               title: 'Owner Menu',
               description: `Total Command -`,
               id: '.ping'
            },
            {
               title: 'Logo Menu',
               description: `Total Command -`,
               id: '.ping'
            },
            {
               title: 'Main Menu',
               description: `Total Command -`,
               id: '.ping'
            },
            {
               title: 'Movie Menu',
               description: `Total Command -`,
               id: '.ping'
            },
            {
               title: 'Ai Menu',
               description: `Total Command -`,
               id: '.sc'
            }
         ]
      }]
      let listMessage = {
         title: 'Select Here',
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
