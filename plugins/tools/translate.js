const translate = require('../../lib/src/translate/translate.js');
exports.default = {
   names: ['Tools'],
   tags: ['translate'],
   command: ['translate', 'tr'],
   start: async (m, {
      conn,
      args,
      prefix,
      text,
      command
   }) => {
      if (!text) return m.reply('Masukan Text Nya Goblok')
      var lang, text
      if (args.length >= 2) {
         lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
      } else if (m.quoted && m.quoted.text) {
         lang = args[0] ? args[0] : 'id', text = m.quoted.text
      } else m.reply(`contoh: ${prefix + command} id hello i am robot`)
      let res = await translate(text, {
         to: lang,
         autoCorrect: true
      }).catch(_ => null)
      if (!res) return m.reply(`Error : Bahasa "${lang}" Tidak Support`)
      var Translate = `*Terdeteksi Bahasa:* ${res.from.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim()
      conn.adReply(m.chat, Translate, cover, m);
   },
   limit: 2
};