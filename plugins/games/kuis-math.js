const rewards = {
   limit: 10,
   uang: 30
}
exports.default = {
   names: ['Games'],
   tags: ['kuismath', 'math', 'matematika'],
   command: ['kuismath', 'math', 'matematika'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      Format
   }) => {
      if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")      
      if (!text) return m.reply(`Pilih Mode:\n- ${Object.keys(modes).join(' \n- ')}\n\nContoh penggunaan: ${prefix+command} medium`)
      const result = await genMath(text.toLowerCase())
      conn.adReply(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik\n\n*Hadiah* :\n *+${rewards.limit} Limit*\n *+${rewards.uang} Uang*`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiz5Y0ncO0gQpNj1N3UrQ-2hx85TaSu_8f8w&usqp=CAU', m).then(() => {
         kuismath[m.sender.split('@')[0]] = result.jawaban
         console.log(kuismath)
      });
      await Format.sleep(result.waktu);
      if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
         console.log("Jawaban: " + result.jawaban);
         m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
         delete kuismath[m.sender.split('@')[0]]         
      }
   }
};
const modes = {
   noob: [-3, 3, -3, 3, '+-', 15000, 10],
   easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
   medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
   hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
   extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
   impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
   impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
};
const operators = {
   '+': '+',
   '-': '-',
   '*': '×',
   '/': '÷'
};
function randomInt(from, to) {
   if (from > to)[from, to] = [to, from]
   from = Math.floor(from)
   to = Math.floor(to)
   return Math.floor((to - from) * Math.random() + from)
};
function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)]
};
function genMath(mode) {
   return new Promise((resolve, reject) => {
      let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
      let a = randomInt(a1, a2)
      let b = randomInt(b1, b2)
      let op = pickRandom([...ops])
      let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
      if (op == '/')[a, result] = [result, a]
      let hasil = {
         soal: `${a} ${operators[op]} ${b}`,
         mode: mode,
         waktu: time,        
         jawaban: result
      }
      resolve(hasil)
   })
}