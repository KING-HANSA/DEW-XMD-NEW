const fs = require('fs'), Sys = require('utils-mf'), Setting = JSON.parse(fs.readFileSync('./config.json')), Message = JSON.parse(fs.readFileSync('./lib/message.json'));
global.Format = Sys.Format, Connect = Sys.Connect
global.setting = Setting, mess = Message
global.namebot = setting.botName
global.footer = setting.footer
global.loading = pickRandom([mess.wait, 'Please Wait...', 'Wait a moment....', 'Hold On...', 'Wait....']);
global.ed = ["🕐", "🕑", "🕒", "🕒", "🕓", "🕓", "🕔", "🕔", "🕕", "🕖", "🕘", "🕙", "🕙", "🕚", "🕛", "🕛"]
/** m.edReply("lasttext", delay) 
 *  example m.edReply("Done!", 500) 
**/
global.java = '⭔'
global.javi = '⬣'
global.star = '✨'
global.love = '💕'
global.zw = 'ㄊ'
global.logo_premium = 'Ⓟ'
global.logo_limit = 'Ⓛ'
global.wm = `By ${setting.footer}`
global.logo_title = '┅═┅═[ x ]═┅═┅'
global.gcbot_short = 'https://surl.li/nfcfqm'
global.hyd_gcbot = ['Join group', gcbot_short] 
//link_group bisa kalian ganti link group kalian sendiri kalo punya, atau bisa link chanel juga kalo punya, atau bisa di isi dengan link lain , kalo dari bot ketik .setlink 
global.link_group = 'https://whatsapp.com/channel/0029Varwcfc7YSd60AulNF2h'
global.group_welcome = '*Welcome 👊*\n*%user* \n*From %subject*\n*Lets get to know each other first*\n*Number:*\n*Age:*\n*City of Origin:*\n*Hoby:*\n*HP Brand:*\n'
global.group_bye = '*Bye 👋*\n%user \n*Has Left From* %subject Group'
//adReply is message with photo (cover)
global.adReply = true
//untuk owner limit akan tetap di kenakan fitur .addlimit dan lainya biar ga lupa ajah cheat ajh .addlimit nomormu 999999
global.use_limit_message = false
global.limit_message = '🪀 %limit Limit Used √'
//limit_adReply = send message limit with photo or cover 
global.limit_adReply = false
/**
 * auto_backup if u wanna use mongodb change configuration on lib/src/mongo/mongo-info.js
 * setting langsung dari bot ketik .set atau lihat di menunya ketik .menu owner cobain satu satu biar paham 🐽
*/
global.auto_backup = false
global.autodl = false
global.self = false
global.group_mode = false
global.anticall = true
global.group_only_message = false
/**
 * group_only_message is response message groupOnly when group mode is active in private chat.
 * true if wanna respond with groupOnly message
 * false if don't wanna respond message groupOnly in private chat ketik .set ada penjelasan nya atau lihat plugins/owner/owner-set.js",
 **/
global.read_group = true
global.read_private = true
global.typing_group = true
global.typing_private = true
global.recording_group = true
global.recording_private = true
fs.loadFileSync(require.resolve(__filename));
