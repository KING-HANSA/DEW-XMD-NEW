exports.default = {
   names: ['Fun'],
   tags: ['jadian'],
   command: ['jadian'],
   start: async (m, {
      conn,
      participants
   }) => {
      const user = participants.map(v => v.id);
      const user_1 = pickRandom(user)
      const user_2 = pickRandom(user)
      const mentions = [user_1, user_2]
      conn.adReply(m.chat, `Jadian 😋\n@${user_1.split('@')[0]}  ❤️ @${user_2.split('@')[0]}`, cover, m, {
         mentions: mentions,
         showAds: false
      })
   },
   group: true
}