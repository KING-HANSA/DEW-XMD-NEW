module.exports = {
   start: async (m, {
      budy
   }) => {
      if (budy.match('assalamualaikum') || budy.match('assalamu\'alaikum')) {
         await m.reply('Waalaikumsalam')
      }
   }
}