const TicTacToe = require('../../lib/tictactoe.js');
let rewards = {
   limit: 15,
   uang: 30
}
exports.default = {
   names: ['Games'],
   tags: ['tictactoe', 'ttt'],
   command: ['tictactoe', 'ttt', 'delttt'],
   start: async (m, {
      conn,
      text,
      prefix,
      command
   }) => {
      if (command == 'tictactoe' || command == 'ttt') {         
         if (Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Kamu masih didalam game')
         let room = Object.values(tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
         let parseMention = (text = '') => {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
         }
         if (room) {
            await m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
               return {
                  X: '❌',
                  O: '⭕',
                  1: '1️⃣',
                  2: '2️⃣',
                  3: '3️⃣',
                  4: '4️⃣',
                  5: '5️⃣',
                  6: '6️⃣',
                  7: '7️⃣',
                  8: '8️⃣',
                  9: '9️⃣',
               } [v]
            })
            let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await conn.sendText(room.x, str, m, {
               mentions: parseMention(str)
            })
            await conn.sendText(room.o, str, m, {
               mentions: parseMention(str)
            })
         } else {
            room = {
               id: 'tictactoe-' + (+new Date),
               x: m.chat,
               o: '',
               game: new TicTacToe(m.sender, 'o'),
               state: 'WAITING'
            }
            if (text) room.name = text
            tictactoe[room.id] = room
            await m.reply(`Menunggu partner atau kamu bisa ajak member lain dengan mengetik ${prefix+command}` + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
         }
      } else if (command == 'delttt') {
         if (tictactoe) {            
            tictactoe = {}
            conn.reply(m.chat, `Berhasil delete session TicTacToe`, m);
         }
      }
   }
}