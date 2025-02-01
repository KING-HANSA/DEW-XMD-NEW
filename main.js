process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
process.on('uncaughtException', console.log);
global.default_db = { 
   users: {}, 
   chats: {}, 
   settings: {},
   stores: {},   
   menfess: {} 
};
require('./lib/settings.js');
require('utils-mf/index.js');
require('./lib/system.js');
require('./lib/src/mongo/mongo-info.js');
const {
   makeInMemoryStore,
   useMultiFileAuthState,
   DisconnectReason
} = require('@adiwajshing/baileys');
const { signalGroup } = require('utils-mf');
const { caller } = require('./lib/system.js');
const pino = require('pino');
const store = makeInMemoryStore({
   logger: pino().child({
      level: 'silent', 
      stream: 'store'
   })
});
const startWhatsApp = async () => {     
   const { state, saveCreds } = await useMultiFileAuthState('./sessions');   
   const data = await signalGroup(state, store);
   return { data, saveCreds };
};
const setupConnection = (conn, saveCreds) => {
   conn.ev.on('connection.update', (update) => {     
      const { connection, lastDisconnect } = update;
      if (connection === 'open') {
         console.log(`🟢 Online`);
      } else if (connection === 'connecting') {
         console.log(`🟡 Reconnecting`);
      } else if (connection === 'close') {
         console.log(`🔴 Disconnected`); 
         if (lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut) {
            startWhatsApp().then(sock => {
               setupConnection(sock.data, sock.saveCreds);
            });
         }
      }
   });
   caller(conn);
   store.bind(conn.ev);
   conn.ev.on('creds.update', saveCreds);
};
startWhatsApp().then((sock) => {
   setupConnection(sock.data, sock.saveCreds);
});