module.exports = {
   start: async (m, { 
      budy
   }) => {
      if (budy.match(/^\s*tes\s*$/)) {
         await m.reply('Apa Monkey ?');
      }
   }   
}