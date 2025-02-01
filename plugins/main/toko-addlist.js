exports.default = {
   names: ['Owner'],
   tags: ['addtoko', 'addlist'],
   command: ['addtoko', 'addlist'],
   start: async (m, {
      text,
      prefix,
      User,
      command
   }) => {
      if (!text) return m.reply(`Add merchandise to the store.\nexample ${prefix + command} item shop name\n\nExample :\n${prefix + command} shop1(space)Enter title and text \n${prefix + command} Shop2 Titles and list\nthe text \nand so on\n contoh \n.addtoko toko1 1.List Panel enter\n- Panel Ram 1GB 1000 \n- Panel Ram 2GB 2000\nand so on...\nshop name can be anything`);
      let [toko, ...items] = text.split(" ");
      if (!items.length) return m.reply(`Enter the items you want to add to ${toko}`);      
      let item = items.join(" ");      
      db.stores[toko] = item;
      m.reply(`Successfully entered ${item} \nthe ${toko}`);
   },
   owner: true
}