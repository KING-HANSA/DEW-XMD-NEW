exports.default = {
   names: ['Main Menu'],
   tags: ['ya'],
   command: ['ya', 'y'],
   start: async (m, {
      conn,
      Format
   }) => {
      /**
       * example simple send message
       */
      //example reply message without advertisement
      conn.adReply(m.chat, 'Please Type .menu', cover, m, {
         showAds: true,  // or true with advertisement
         manyForward: true //true with forwarded manytimes ads must be false
      })                
   }
};
