const { exec } = require('child_process');
const util = require('util');
exports.default = {
   names: ['Info'],
   tags: ['speedtest'],
   command: ['speedtest', 'testspeed', 'speed'],
   start: async (m, {
      conn
   }) => {
      m.reply('*Testing Speed...*')
      await exec('python3 lib/speed.py', async (x, y) => {
         const result = await util.format(y)
         await conn.reply(m.chat, result, m)
      })
   }
};