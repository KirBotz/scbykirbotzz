var {
 WAConnection,
  MessageType,
   Presence,
    MessageOptions,
     Mimetype,
      WALocationMessage,
       WA_MESSAGE_STUB_TYPES,
        WA_DEFAULT_EPHEMERAL,
         ReconnectMode,
          ProxyAgent,
           GroupSettingChange,
            waChatKey,
             mentionedJid,
              processTime,
        } = 
        require('@adiwajshing/baileys')
var hx = require('hxz-api')
var moment = require('moment-timezone')
var speed = require('performance-now')
var { spawn, exec, execSync } = require('child_process')
var axios = require('axios')
var ffmpeg = require('fluent-ffmpeg')
var fs = require('fs-extra')
var imgbb = require('imgbb-uploader')
var yts = require( 'yt-search')
var os = require('os')
var fromBuffer = require('file-type')
var FormData = require('form-data')
var util = require('util')
var got = require('got')
var twitterGetUrl = require('twitter-url-direct')
var googleImage = require('g-i-s')
var brainly = require('brainly-scraper')
var fetch = require('node-fetch')
var ggs = require('google-it')
var request = require('request')
var crypto = require('crypto')
var chalk = require('chalk')
var fromBuffer = require('file-type')
var ms = require('parse-ms')
var toMs = require('ms')
var { error } = require('qrcode-terminal')
var { color, bgcolor } = require('../V2/color')
var { wait, forks, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, spinner, globalSpinner, banner, start, info, success, close } = require('../V2/functions')
var { yta, ytv, upload, formatDate } = require('../V2/ytdl')
var { y2mateA, y2mateV } = require('../V2/y2mate')
var { webp2gifFile, igDownloader } = require('../V2/gif.js')
var { mediafireDl } = require('../V2/mediafire.js')
//////////////////////////////////////////////////////////////////////////////////////////
var _scommand = JSON.parse(fs.readFileSync('./V3/scommand.json'))
var welkom = JSON.parse(fs.readFileSync('./V3/welcome.json'))
var antilink = JSON.parse(fs.readFileSync('./V3/antilink.json'))
var antilinkyt = JSON.parse(fs.readFileSync('./V3/antilinkyt.json'))
var antilinkwame = JSON.parse(fs.readFileSync('./V3/antilinkwame.json'))
var antivirtex = JSON.parse(fs.readFileSync('./V3/antivirtex.json'))
var setting = JSON.parse(fs.readFileSync('./V1/session/setting.json'))
//////////////////////////////////////////////////////////////////////////////////////////
ownerName = setting.namaOwnr
ownerNumber = setting.nomorOwnr
owner = setting.Ownr
botName = setting.nmaBot
numberBot = setting.nmorBot
fake = setting.fke
gopay = setting.noGopay
lolkey = setting.LolKeyy
harga1bulan = 'HARGA : 1 BULAN 15K'
harga2bulan = 'HARGA : 2 BULAN 20K'
harga6bulan = 'HARGA : 6 BULAN 30K'
hargaperpanjang = 'PERPANJANG 15K / 1 BULAN'
logonyatod = fs.readFileSync('./V4/kirtod.jpeg')
nilogorules = fs.readFileSync('./V4/rules.jpg')
nilogoowner = fs.readFileSync('./V4/owner.jpg')
nilogomenu = fs.readFileSync('./V4/fakeakira.jpeg')
qrall = fs.readFileSync('./V4/qrallpayment.jpg')
qrgopay = fs.readFileSync('./V4/qrgopay.jpg')
///////////////
ftogroup = fs.readFileSync('./V4/FOTO/groupfake.jpg')
ftoowner = fs.readFileSync('./V4/FOTO/ownerfake.jpg')
ftoother = fs.readFileSync('./V4/FOTO/otherfake.jpg')
ftomaker = fs.readFileSync('./V4/FOTO/makerfake.jpg')
ftodownload = fs.readFileSync('./V4/FOTO/downloadfake.jpg')
ftosticker = fs.readFileSync('./V4/FOTO/stickerfake.jpg')
ftogame = fs.readFileSync('./V4/FOTO/gamefake.jpg')
ftoples = fs.readFileSync('./V4/FOTO/18+fake.jpg')
ftoasupan = fs.readFileSync('./V4/FOTO/asupanfake.jpg')
///////////////
banChats = true
//////////////////////////////////////////////////////////////////////////////////////////
var getCmd = (id) => {
let position = null;
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i;
}
});
if (position !== null) {
return _scommand[position].chats;
}
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//////////////////////////////////////////////////////////////////////////////////////////
          var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🏙'
}
////////////////////////////////////////////////////////////////////////////////////////
module.exports = KirBotz = async (KirBotz, akira) => {
	   try {
       if (!akira.hasNewMessage) return
       akira = akira.messages.all()[0]
	   if (!akira.message) return
	   if (akira.key && akira.key.remoteJid == 'status@broadcast') return
	   global.blocked
	   akira.message = (Object.keys(akira.message)[0] === 'ephemeralMessage') ? akira.message.ephemeralMessage.message : akira.message
       var content = JSON.stringify(akira.message)
	   var from = akira.key.remoteJid
	   var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
	   var tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
	   var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
       var type = Object.keys(akira.message)[0]
       var cmd = (type === 'conversation' && akira.message.conversation) ? akira.message.conversation : (type == 'imageMessage') && akira.message.imageMessage.caption ? akira.message.imageMessage.caption : (type == 'videoMessage') && akira.message.videoMessage.caption ? akira.message.videoMessage.caption : (type == 'extendedTextMessage') && akira.message.extendedTextMessage.text ? akira.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
       var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'
       body = (type === 'conversation' && akira.message.conversation.startsWith(prefix)) ? akira.message.conversation : (type == 'imageMessage') && akira.message[type].caption.startsWith(prefix) ? akira.message[type].caption : (type == 'videoMessage') && akira.message[type].caption.startsWith(prefix) ? akira.message[type].caption : (type == 'extendedTextMessage') && akira.message[type].text.startsWith(prefix) ? akira.message[type].text : (type == 'listResponseMessage') && akira.message[type].singleSelectReply.selectedRowId ? akira.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && akira.message[type].selectedButtonId ? akira.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(akira.message[type].fileSha256.toString('base64')) !== null && getCmd(akira.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(akira.message[type].fileSha256.toString('base64')) : ""
       budy = (type === 'conversation') ? akira.message.conversation : (type === 'extendedTextMessage') ? akira.message.extendedTextMessage.text : ''
       var command = body.slice(1).trim().split(/ +/).shift().toLowerCase()       
       var args = body.trim().split(/ +/).slice(1)
       var arg = body.substring(body.indexOf(' ') + 1)
       var ar = args.map((v) => v.toLowerCase())
       var argz = body.trim().split(/ +/).slice(1)
       var isCmd = body.startsWith(prefix) 
       var q = args.join(' ')
       var Verived = "0@s.whatsapp.net"
       var is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
       var txt = akira.message.conversation
       var botNumber = KirBotz.user.jid
       var isGroup = from.endsWith('@g.us')
       let sender = isGroup ? akira.participant : akira.key.remoteJid
       var senderr = akira.key.fromMe ? KirBotz.user.jid : akira.key.remoteJid.endsWith('@g.us') ? akira.participant : akira.key.remoteJid
       var totalchat = await KirBotz.chats.all()
       var groupMetadata = isGroup ? await KirBotz.groupMetadata(from) : ''
       var groupName = isGroup ? groupMetadata.subject : ''
       var groupId = isGroup ? groupMetadata.jid : ''
       var groupMembers = isGroup ? groupMetadata.participants : ''
       var groupDesc = isGroup ? groupMetadata.desc : ''
       var groupOwner = isGroup ? groupMetadata.owner : ''
       var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
       var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
       var isGroupAdmins = groupAdmins.includes(sender) || false
       var isWelkom = isGroup ? welkom.includes(from) : false
       var isAntiLink = isGroup ? antilink.includes(from) : false
       var isAntiLinkyt = isGroup ? antilinkyt.includes(from) : false
       var isAntiLinkwame = isGroup ? antilinkwame.includes(from) : false
       var isAntiVirtex = isGroup ? antivirtex.includes(from) : false
       var conts = akira.key.fromMe ? KirBotz.user.jid : KirBotz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
       var pushname = akira.key.fromMe ? KirBotz.user.name : conts.notify || conts.vname || conts.name || '-'
       var isOwner = ownerNumber.includes(sender)
//////////////////////////////////////////////////////////////////////////////////////////
selectedButton = (type == 'buttonsResponseMessage') ? akira.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? akira.message.listResponseMessage.title : ''
//////////////////////////////////////////////////////////////////////////////////////////
var sendButton = async (from, context, fortext, but, fgi) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
KirBotz.sendMessage(from, buttonMessages, MessageType.buttonsMessage, {
quoted: fgi
})
}
var sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
let kma = gam1
let mhan = await KirBotz.prepareMessage(from, kma, image)
var buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
KirBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
KirBotz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
var sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await KirBotz.prepareMessage(from, kma, video)
var buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
KirBotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButloc = (from, title, text, desc, button, sen, men, file) => {
return KirBotz.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: akira, contextInfo: {"mentionedJid": men ? men : []}})
}
//////////////////////////////////////////////////////////////////////////////////////////
kirr = {
		  wait: '*Waittt.....*',
		  success: '*Nih Kak*',
		  error: {
		  stick: '*Gagal Convert Gambar To Sticker...Coba Lagi !*',
		  Iv: '*Linknya Error Tod !*'
		  },
		  only: {
		  admin: '*Kusus Admin Tod !*',
		  group: '*Khusus Group Tod !*'
		  }
		  }
//////////////////////////////////////////////////////////////////////////////////////////
var jam = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         
var hour_now = moment().format('HH:mm:ss')
//////////////////////////////////////////////////////////////////////////////////////////
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var hideTag = async function(from, text){
let anu = await KirBotz.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
KirBotz.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./V4/fakeakira.jpeg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
var listmsg = (from, title, desc, list) => { 
let po = KirBotz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©KirBotz*_","listType": "SINGLE_SELECT","sections": list}}, {})
return KirBotz.relayWAMessage(po, {waitForAck: true})
}
var reply = (teks) => {
KirBotz.sendMessage(from, teks, text, {quoted:fgi, thumbnail: qrall})
}
var sendMess = (hehe, teks) => {
KirBotz.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? KirBotz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : KirBotz.sendMessage(from, teks.trim(), extendedText, { quoted: akira, contextInfo: { "mentionedJid": memberr } })
}            
var getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
var costum = (pesan, tipe, target, target2) => {
KirBotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
KirBotz.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
KirBotz.sendMessage(from, hasil, type, options).catch(e => {
KirBotz.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}
var runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
function monospace(string) {
return '```' + string + '```'
}   
var fgi = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {})
},
message: { 
"videoMessage": { 
"title": `${ucapanWaktu}\n${tanggal}\n${runtime(process.uptime())}`,
"h": `${ucapanWaktu}\n${tanggal}\n${runtime(process.uptime())}`,
'duration': '99999', 
'gifPlayback': 'true', 
'caption': `${ucapanWaktu}\n${tanggal}\n${runtime(process.uptime())}`,
'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')
}
}
} 
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
KirBotz.sendMessage(to, media, type, { quoted: fgi, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   
//////////////
var sticOwner = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/owner.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
var sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/notadmin.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
var sticAdmin = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/admin.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
var sticWait = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/wait.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
var sticOk = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/ok.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
var sticToxic = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/toxic.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
var sticLrngn = (hehe) => {
			ano = fs.readFileSync('./V4/STICKER/JANGANDIUBAH/larangan.webp')
			KirBotz.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
//////////////////////////////////////////////////////////////////////////////////////////
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (isCmd && isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
//////////////////////////////////////////////////////////////////////////////////////////
if (!akira.key.fromMe && banChats === true) return

if (isGroup && !akira.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'yellow'))
reply(`「 *LINK TERDETEKSI* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}
if (isGroup && !akira.key.fromMe && isAntiLinkyt) {
if (budy.includes("://youtu.be/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'yellow'))
reply(`「 *LINK TERDETEKSI* 」\n\n_Link terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}
if (isGroup && !akira.key.fromMe && isAntiLinkwame) {
if (budy.includes("wa.me/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'yellow'))
reply(`「 *LINK TERDETEKSI* 」\n\n_Link terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
KirBotz.groupRemove(from, [sender])
}, 2000);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
KirBotz.groupRemove(from, [sender])
}
//━━━━━━━━━━━━━━━[ NO PREFIX ]━━━━━━━━━━━━━━━\\
switch(is) {

case 'owner':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'N:Sy;Bot;;;\n' +
            `FN:${ownerName}\n` +
            `item1.TEL;waid=${owner}:${owner}\n` +
            `item1.X-ABLabel:👑 Creator\n` +
            `item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n` +
            `item2.X-ABLabel:📧 Email\n` +
            `item3.URL:https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg/\n` +
            `item3.X-ABLabel:⚙️ Channel Owner\n` +
            `item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
            `item4.X-ABADR:ac\n` +
            `item4.X-ABLabel:🌍 Region\n` +
            `item5.X-ABLabel:⚔️ Kir - Botz Developer\n` +
            'END:VCARD'.trim()
KirBotz.sendMessage(from, {displayName: `Creator Akira`, vcard: vcard2}, contact, 
{ quoted: fgi, 
})
menuh = `Hai Kak @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `Tuh Owner Ku Kak >_<
Jangan Macem² Yah Kak`,
buttons: [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OK SIAP' }, type: 1 }
         ], 
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogoowner, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'ytowner':
reply (`*Subrek Kak*\nhttps://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`)
break
case 'igowner':
reply (`*Follow Kak*\nhttps://www.instagram.com/kirbotzx/`)
break
case 'ttowner':
reply (`*Follow Kak*\nhttps://vt.tiktok.com/ZSeuqHvL5/`)
break
case 'gtowner':
reply (`*Follow Kak*\nhttps://github.com/KrBtz/`)
break
case 'gckirbotz':
reply (`*Join Kak*\nhttps://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ`)
break
case 'runtime':
reply(`Aktip Selama ${runtime(process.uptime())}\n\n${wib} *WIB*\n${wit} *WIT*\n${wita} *WITA*`)
break
case 'tes':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*Bot Dah On Kak Silahkan Pencet Menu Di Bawah*
*Gunakan Bot Sebaik Mungkin Yah*
`
, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogomenu, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'mode':
if (!akira.key.fromMe) return;
sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
{
buttonId: `${prefix}self`,
buttonText: {
displayText: `⬡ SELF `,
},
type: 1,
},
{
buttonId: `${prefix}public`,
buttonText: {
displayText: `⬡ PUBLIC`,
},
type: 1,
},
]);
break;
case 'leave':{
          if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
          KirBotz.groupLeave(from)
}
          break
case 'public':
if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (banChats === false) return
uptime = process.uptime()
banChats = false
reply(`「 *PUBLIC-MODE* 」`)
break
case 'self':
if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (banChats === true) return
uptime = process.uptime()
banChats = true
reply(`「 *SELF-MODE* 」`)
break
case 'opengc':
if (!isGroup) return reply(kirr.only.group)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
reply(`Sukses Membuka Grup ${groupName} Kontol`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'closegc':
if (!isGroup) return reply(kirr.only.group)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
reply(`Sukses Menutup Grup ${groupName} Kontol`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'd':
case 'del':
case 'delete': 
               try {
               if (akira.message.extendedTextMessage === undefined || akira.message.extendedTextMessage === null) return reply('Reply chat bot')
               KirBotz.deleteMessage(from, {id: akira.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break

}
//━━━━━━━━━━━━━━━[ YANG PREFIX ]━━━━━━━━━━━━━━━\\
switch (command) {
case 'menu':
janganti = '6287705048235'
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 INFO USER 」*
*│ Nama :* ${pushname}
*│ Nomor :* wa.me/${sender.split('@')[0]}
*│ Bio :* ${thu.status}
*╰──────────────*

*╭──「 INFO BOTZ 」*
*│Nama Owner :* ${ownerName}
*│Nomor Owner :* wa.me/${janganti}
*│Nama Bot :* ${botName}
*│Nomor Bot :* wa.me/${numberBot}
*│Mode :* ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}
*│Group Chat :* ${groups.length}
*│Private Chat :* ${privat.length}
*│Total Chat :* ${totalChat.length}
*╰──────────────*

*╭──「 PERATURAN 」*
*│ Runtime :* ${runtime(process.uptime())}
*│ Tanggal :* ${tanggal}
*│ Wib :* ${wib}
*│ Wita :* ${wita}
*│ Wit :* ${wit}
*╰──────────────*
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
 「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」
`, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: '< COMMAND >' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogomenu, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
case 't':
listMsg = {
buttonText: '𝗟𝗜𝗦𝗧',
footerText: `${ucapanWaktu} Kak @${sender.split('@')[0]}
Silahkan Pilih Di Bawah`,
description: `LIST TOP UP`,
sections: [
{
"title": `${ucapanWaktu} - ${tanggal}`,
 rows: [
{
"title": `メ DIAMOND FREE FIRE メ`,
"rowId": `${prefix}dmff`
}
,
{
"title": `メ DIAMOND MOBILE LEGEND メ`,
"rowId": `${prefix}dmml`
}
,
{
"title": `• YOUTUBE OWNER •`,
"rowId": `${prefix}ytowner`
}
,
{
"title": `• INSTAGRAM OWNER •`,
"rowId": `${prefix}igowner`
}
,
{
"title": `• TIKTOK OWNER •`,
"rowId": `${prefix}ttowner`
}
,
{
"title": `• GITHUB OWNER •`,
"rowId": `${prefix}gtowner`
}
,
{
"title": `• GROUP KIRBOTZ •`,
"rowId": `${prefix}gckirbotz`
}
]
}],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fgi})
break
case 'command':
listMsg = {
buttonText: '𝗟𝗜𝗦𝗧',
footerText: `${ucapanWaktu} Kak @${sender.split('@')[0]}
Silahkan Pilih Di Bawah`,
description: `LIST MENU`,
sections: [
{
"title": `${ucapanWaktu} - ${tanggal}`,
 rows: [
{
"title": `ALL MENU`,
"description": `Subrek Kak : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"rowId": `${prefix}allmenu`
}
,
{
"title": `OWNER MENU`,
"description": `Subrek Kak : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"rowId": `${prefix}ownermenu`
}
,
{
"title": `GROUP MENU`,
"description": `Subrek Kak : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"rowId": `${prefix}groupmenu`
}
,
{
"title": `MAKER MENU`,
"description": `Subrek Kak : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"rowId": `${prefix}makermenu`
}
,
{
"title": `OTHER MENU`,
"description": `Subrek Kak : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"rowId": `${prefix}othermenu`
}
,
{
"title": `DOWNLOAD MENU`,
"description": `Subrek Kak : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"rowId": `${prefix}downloadmenu`
}
,
{
"title": `STICKER MENU`,
"description": `Subrek Kak : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"rowId": `${prefix}stickermenu`
}
,
{
"title": `GAME MENU`,
"description": `Subrek Kak : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"rowId": `${prefix}gamemenu`
}
,
{
"title": `18+ MENU`,
"description": `Subrek Kak : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"rowId": `${prefix}18+menu`
}
,
{
"title": `ASUPAN MENU`,
"description": `Subrek Kak : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"rowId": `${prefix}asupanmenu`
}
,
{
"title": `SEWA BOT`,
"description": `Subrek Kak : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"rowId": `${prefix}sewabot`
}
,
{
"title": `DONASI BOT`,
"description": `Subrek Kak : https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"rowId": `${prefix}donasi`
}
]
}],
listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fgi})
break
case 'groupmenu':
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 GROUP MENU 」*
*✗⃝* ${prefix}add *6218317882889*
*✗⃝* ${prefix}kick *@tag*
*✗⃝* ${prefix}welcome *button*
*✗⃝* ${prefix}antilink *button*
*✗⃝* ${prefix}antilinkwame *button*
*✗⃝* ${prefix}antilinkyt *button*
*✗⃝* ${prefix}group *button*
*✗⃝* ${prefix}opengc
*✗⃝* ${prefix}closegc
*✗⃝* ${prefix}linkgc
*✗⃝* ${prefix}tagall
*✗⃝* ${prefix}hidetag
*╰─────────────*
 「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ftogroup, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'makermenu':
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 MAKER MENU 」*
*✗⃝* ${prefix}coolgravity *Akira*
*✗⃝* ${prefix}pornhub *Akira Botz*
*✗⃝* ${prefix}glitch *Akira Botz*
*✗⃝* ${prefix}avenger *Akira Botz*
*✗⃝* ${prefix}space *Akira Botz*
*✗⃝* ${prefix}ninjalogo *Akira Botz*
*✗⃝* ${prefix}marvelstudio *Akira Botz*
*✗⃝* ${prefix}lionlogo *Akira Botz*
*✗⃝* ${prefix}wolflogo *Akira Botz*
*✗⃝* ${prefix}steel3d *Akira Botz*
*✗⃝* ${prefix}wallgravity *Akira Botz*
*✗⃝* ${prefix}tiktok *Akira Botz*
*✗⃝* ${prefix}arcade8bit *Akira Botz*
*✗⃝* ${prefix}battlefield4 *Akira Botz*
*✗⃝* ${prefix}pubg *Akira Botz*
*✗⃝* ${prefix}blackpink *Akira*
*✗⃝* ${prefix}neon *Akira*
*✗⃝* ${prefix}greenneon *Akira*
*✗⃝* ${prefix}advanceglow *Akira*
*✗⃝* ${prefix}futureneon *Akira*
*✗⃝* ${prefix}sandwriting *Akira*
*✗⃝* ${prefix}sandsummer *Akira*
*✗⃝* ${prefix}sandengraved *Akira*
*✗⃝* ${prefix}metaldark *Akira*
*✗⃝* ${prefix}neonlight *Akira*
*✗⃝* ${prefix}holographic *Akira*
*✗⃝* ${prefix}text1917 *Akira*
*✗⃝* ${prefix}minion *Akira*
*✗⃝* ${prefix}deluxesilver *Akira*
*✗⃝* ${prefix}newyearcard *Akira*
*✗⃝* ${prefix}bloodfrosted *Akira*
*✗⃝* ${prefix}halloween *Akira*
*✗⃝* ${prefix}jokerlogo *Akira*
*✗⃝* ${prefix}fireworksparkle *Akira*
*✗⃝* ${prefix}natureleaves *Akira*
*✗⃝* ${prefix}bokeh *Akira*
*✗⃝* ${prefix}toxic *Akira*
*✗⃝* ${prefix}strawberry *Akira*
*✗⃝* ${prefix}box3d *Akira*
*✗⃝* ${prefix}roadwarning *Akira*
*✗⃝* ${prefix}breakwall *Akira*
*✗⃝* ${prefix}icecold *Akira*
*✗⃝* ${prefix}luxury *Akira*
*✗⃝* ${prefix}cloud *Akira*
*✗⃝* ${prefix}summersand *Akira*
*✗⃝* ${prefix}horrorblood *Akira*
*✗⃝* ${prefix}thunder *Akira*
*✗⃝* ${prefix}shadow
*✗⃝* ${prefix}cup
*✗⃝* ${prefix}cup1
*✗⃝* ${prefix}romance
*✗⃝* ${prefix}smoke
*✗⃝* ${prefix}burnpaper
*✗⃝* ${prefix}lovemessage
*✗⃝* ${prefix}undergrass
*✗⃝* ${prefix}love
*✗⃝* ${prefix}coffe
*✗⃝* ${prefix}woodheart
*✗⃝* ${prefix}woodenboard
*✗⃝* ${prefix}summer3d
*✗⃝* ${prefix}wolfmetal
*✗⃝* ${prefix}nature3d
*✗⃝* ${prefix}underwater
*✗⃝* ${prefix}golderrose
*✗⃝* ${prefix}summernature
*✗⃝* ${prefix}letterleaves
*✗⃝* ${prefix}glowingneon
*✗⃝* ${prefix}fallleaves
*✗⃝* ${prefix}flamming
*✗⃝* ${prefix}harrypotter
*✗⃝* ${prefix}carvedwood
*✗⃝* ${prefix}wetglass
*✗⃝* ${prefix}multicolor3d
*✗⃝* ${prefix}watercolor
*✗⃝* ${prefix}luxurygold
*✗⃝* ${prefix}galaxywallpaper
*✗⃝* ${prefix}lighttext
*✗⃝* ${prefix}beautifulflower
*✗⃝* ${prefix}puppycute
*✗⃝* ${prefix}royaltext
*✗⃝* ${prefix}heartshaped
*✗⃝* ${prefix}birthdaycake
*✗⃝* ${prefix}galaxystyle
*✗⃝* ${prefix}hologram3d
*✗⃝* ${prefix}glossychrome
*✗⃝* ${prefix}greenbush
*✗⃝* ${prefix}metallogo
*✗⃝* ${prefix}noeltext
*✗⃝* ${prefix}glittergold
*✗⃝* ${prefix}textcake
*✗⃝* ${prefix}starsnight
*✗⃝* ${prefix}wooden3d
*✗⃝* ${prefix}textbyname
*✗⃝* ${prefix}writegalacy
*✗⃝* ${prefix}galaxybat
*✗⃝* ${prefix}snow3d
*✗⃝* ${prefix}birthdayday
*✗⃝* ${prefix}goldplaybutton
*✗⃝* ${prefix}silverplaybutton
*✗⃝* ${prefix}freefire
*╰─────────────*
 「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ftomaker, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'stickermenu':
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 STICKER MENU 」*
*✗⃝* ${prefix}tourl *reply foto/video*
*✗⃝* ${prefix}sticker *reply foto*
*✗⃝* ${prefix}take *name|pack*
*✗⃝* ${prefix}toimg *reply sticker*
*✗⃝* ${prefix}tomp4 *reply sticker gerak*
*✗⃝* ${prefix}tomp3 *reply video*
*✗⃝* ${prefix}ssweb *Link*
*✗⃝* ${prefix}nulis *Akira*
*✗⃝* ${prefix}emoji *emojinya*
*✗⃝* ${prefix}faktaunik
*✗⃝* ${prefix}katabijak
*✗⃝* ${prefix}pantun
*✗⃝* ${prefix}bucin
*✗⃝* ${prefix}quotes
*✗⃝* ${prefix}quotesanime
*✗⃝* ${prefix}quotesdilan
*✗⃝* ${prefix}cerpen
*✗⃝* ${prefix}ppcp
*✗⃝* ${prefix}darkjokes
*✗⃝* ${prefix}lovelive
*✗⃝* ${prefix}sao
*✗⃝* ${prefix}hsdxd
*✗⃝* ${prefix}meme
*╰─────────────*
 「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ftosticker, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'ownermenu':
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 OWNER MENU 」*
*✗⃝* ${prefix}bc *teks*
*✗⃝* ${prefix}public
*✗⃝* ${prefix}self
*✗⃝* ${prefix}mode
*✗⃝* ${prefix}join *linkgc*
*╰─────────────*
 「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ftoowner, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case '18+menu':
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 18+ MENU 」*
*✗⃝* ${prefix}waifu
*✗⃝* ${prefix}loli
*✗⃝* ${prefix}husbu
*✗⃝* ${prefix}milf
*✗⃝* ${prefix}cosplay
*✗⃝* ${prefix}wallml
*✗⃝* ${prefix}hentai
*✗⃝* ${prefix}chiisaihentai
*✗⃝* ${prefix}trap
*✗⃝* ${prefix}blowjob
*✗⃝* ${prefix}yaoi
*✗⃝* ${prefix}ecchi
*✗⃝* ${prefix}ahegao
*✗⃝* ${prefix}hololewd
*✗⃝* ${prefix}sideoppai
*✗⃝* ${prefix}animefeets
*✗⃝* ${prefix}animebooty
*✗⃝* ${prefix}animethighss
*✗⃝* ${prefix}hentaiparadise
*✗⃝* ${prefix}animearmpits
*✗⃝* ${prefix}hentaifemdom
*✗⃝* ${prefix}lewdanimegirls
*✗⃝* ${prefix}biganimetiddies
*✗⃝* ${prefix}animebellybutton
*✗⃝* ${prefix}hentai4everyone
*✗⃝* ${prefix}bj
*✗⃝* ${prefix}ero
*✗⃝* ${prefix}cum
*✗⃝* ${prefix}feet
*✗⃝* ${prefix}yuri
*✗⃝* ${prefix}trap
*✗⃝* ${prefix}lewd
*✗⃝* ${prefix}feed
*✗⃝* ${prefix}eron
*✗⃝* ${prefix}solo
*✗⃝* ${prefix}gasm
*✗⃝* ${prefix}poke
*✗⃝* ${prefix}anal
*✗⃝* ${prefix}holo
*✗⃝* ${prefix}tits
*✗⃝* ${prefix}kuni
*✗⃝* ${prefix}kiss
*✗⃝* ${prefix}erok
*✗⃝* ${prefix}smug
*✗⃝* ${prefix}baka
*✗⃝* ${prefix}solog
*✗⃝* ${prefix}feetg
*✗⃝* ${prefix}lewdk
*✗⃝* ${prefix}waifu
*✗⃝* ${prefix}pussy
*✗⃝* ${prefix}femdom
*✗⃝* ${prefix}cuddle
*✗⃝* ${prefix}hentai
*✗⃝* ${prefix}eroyuri
*✗⃝* ${prefix}cum_jpg
*✗⃝* ${prefix}erofeet
*✗⃝* ${prefix}holoero
*✗⃝* ${prefix}classic
*✗⃝* ${prefix}erokemo
*✗⃝* ${prefix}fox_girl
*✗⃝* ${prefix}futanari
*✗⃝* ${prefix}lewdkemo
*✗⃝* ${prefix}wallpaper
*✗⃝* ${prefix}pussy_jpg
*✗⃝* ${prefix}kemonomimi
*✗⃝* ${prefix}nsfw_avatar
*╰─────────────*
 「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ftoples, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'downloadmenu':
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 DOWNLOAD MENU 」*
*✗⃝* ${prefix}play *query*
*✗⃝* ${prefix}ytmp4 *linkYT*
*✗⃝* ${prefix}ytmp3 *linkYT*
*✗⃝* ${prefix}tiktokdl *linkTT*
*✗⃝* ${prefix}tiktokmp4 *linkTT*
*✗⃝* ${prefix}tiktokmp3 *linkTT*
*✗⃝* ${prefix}igdl *linkIG*
*✗⃝* ${prefix}mediafire *link*
*╰─────────────*
 「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ftodownload, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'othermenu':
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 OTHER MENU 」*
*✗⃝* ${prefix}owner
*✗⃝* ${prefix}runtime
*✗⃝* ${prefix}rules
*✗⃝* ${prefix}bugreport *keluhan bot*
*✗⃝* ${prefix}lolkey *apikey*
*✗⃝* ${prefix}asmaulhusna
*✗⃝* ${prefix}kisahnabi *adam*
*✗⃝* ${prefix}jadwalsholat *Yogyakarta*
*✗⃝* ${prefix}lirik *Judul Lagu*
*╰─────────────*
 「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ftoother, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'gamemenu':
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 GAME MENU 」*
*✗⃝* ${prefix}suit
*✗⃝* ${prefix}bisakah
*✗⃝* ${prefix}kapankah
*✗⃝* ${prefix}rate
*✗⃝* ${prefix}apakah
*✗⃝* ${prefix}gantengcek
*✗⃝* ${prefix}cantikcek
*✗⃝* ${prefix}cekme
*✗⃝* ${prefix}jadian
*✗⃝* ${prefix}truth
*✗⃝* ${prefix}dare
*✗⃝* ${prefix}tebakgambar
*✗⃝* ${prefix}family100
*╰─────────────*
 「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ftogame, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'asupanmenu':
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `*╭──「 ASUPAN MENU 」*
*✗⃝* ${prefix}cogan
*✗⃝* ${prefix}cecan
*✗⃝* ${prefix}cecanvietnam
*✗⃝* ${prefix}cecanrandom
*✗⃝* ${prefix}santuy
*✗⃝* ${prefix}ukhti
*✗⃝* ${prefix}bocil
*✗⃝* ${prefix}ghea
*✗⃝* ${prefix}rika
*✗⃝* ${prefix}cecanmalaysia
*✗⃝* ${prefix}cecankorea
*✗⃝* ${prefix}cecanjapan
*✗⃝* ${prefix}cecanindonesia
*✗⃝* ${prefix}cecanthailand
*╰─────────────*
 「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」
`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ O メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ftoasupan, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'allmenu':
janganti = '6287705048235'
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
	menunyangen = `
*🌹ℍ𝔼𝕃𝕃𝕆𝕎𝕆ℝ𝕃𝔻🌹*

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
*Nama Owner :* ${ownerName}
*Nomor Owner :* wa.me/${janganti}
*Nama Bot :* ${botName}
*Nomor Bot :* wa.me/${numberBot}
*Mode :* ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}
*Group Chat :* ${groups.length}
*Private Chat :* ${privat.length}
*Total Chat :* ${totalChat.length}

*──────" 𝖀𝖘𝖊𝖗 𝕴𝖓𝖋𝖔 "──────*
*Nama :* ${pushname}
*Nomor :* wa.me/${sender.split('@')[0]}
*Bio :* ${thu.status}

*╭──「 OWNER MENU 」*
*✗⃝* ${prefix}bc *teks*
*✗⃝* ${prefix}public
*✗⃝* ${prefix}self
*✗⃝* ${prefix}mode
*✗⃝* ${prefix}join *linkgc*
*╰─────────────*
*╭──「 OTHER MENU 」*
*✗⃝* ${prefix}owner
*✗⃝* ${prefix}runtime
*✗⃝* ${prefix}rules
*✗⃝* ${prefix}bugreport *keluhan bot*
*✗⃝* ${prefix}lolkey *apikey*
*✗⃝* ${prefix}asmaulhusna
*✗⃝* ${prefix}kisahnabi *adam*
*✗⃝* ${prefix}jadwalsholat *Yogyakarta*
*✗⃝* ${prefix}lirik *Judul Lagu*
*╰─────────────*
*╭──「 GROUP MENU 」*
*✗⃝* ${prefix}add *6218317882889*
*✗⃝* ${prefix}kick *@tag*
*✗⃝* ${prefix}welcome *button*
*✗⃝* ${prefix}antilink *button*
*✗⃝* ${prefix}antilinkwame *button*
*✗⃝* ${prefix}antilinkyt *button*
*✗⃝* ${prefix}antivirtex *button*
*✗⃝* ${prefix}group *button*
*✗⃝* ${prefix}opengc
*✗⃝* ${prefix}closegc
*✗⃝* ${prefix}linkgc
*✗⃝* ${prefix}tagall
*✗⃝* ${prefix}hidetag
*╰─────────────*
*╭──「 MAKER MENU 」*
*✗⃝* ${prefix}coolgravity *Akira*
*✗⃝* ${prefix}pornhub *Akira Botz*
*✗⃝* ${prefix}glitch *Akira Botz*
*✗⃝* ${prefix}avenger *Akira Botz*
*✗⃝* ${prefix}space *Akira Botz*
*✗⃝* ${prefix}ninjalogo *Akira Botz*
*✗⃝* ${prefix}marvelstudio *Akira Botz*
*✗⃝* ${prefix}lionlogo *Akira Botz*
*✗⃝* ${prefix}wolflogo *Akira Botz*
*✗⃝* ${prefix}steel3d *Akira Botz*
*✗⃝* ${prefix}wallgravity *Akira Botz*
*✗⃝* ${prefix}tiktok *Akira Botz*
*✗⃝* ${prefix}arcade8bit *Akira Botz*
*✗⃝* ${prefix}battlefield4 *Akira Botz*
*✗⃝* ${prefix}pubg *Akira Botz*
*✗⃝* ${prefix}blackpink *Akira*
*✗⃝* ${prefix}neon *Akira*
*✗⃝* ${prefix}greenneon *Akira*
*✗⃝* ${prefix}advanceglow *Akira*
*✗⃝* ${prefix}futureneon *Akira*
*✗⃝* ${prefix}sandwriting *Akira*
*✗⃝* ${prefix}sandsummer *Akira*
*✗⃝* ${prefix}sandengraved *Akira*
*✗⃝* ${prefix}metaldark *Akira*
*✗⃝* ${prefix}neonlight *Akira*
*✗⃝* ${prefix}holographic *Akira*
*✗⃝* ${prefix}text1917 *Akira*
*✗⃝* ${prefix}minion *Akira*
*✗⃝* ${prefix}deluxesilver *Akira*
*✗⃝* ${prefix}newyearcard *Akira*
*✗⃝* ${prefix}bloodfrosted *Akira*
*✗⃝* ${prefix}halloween *Akira*
*✗⃝* ${prefix}jokerlogo *Akira*
*✗⃝* ${prefix}fireworksparkle *Akira*
*✗⃝* ${prefix}natureleaves *Akira*
*✗⃝* ${prefix}bokeh *Akira*
*✗⃝* ${prefix}toxic *Akira*
*✗⃝* ${prefix}strawberry *Akira*
*✗⃝* ${prefix}box3d *Akira*
*✗⃝* ${prefix}roadwarning *Akira*
*✗⃝* ${prefix}breakwall *Akira*
*✗⃝* ${prefix}icecold *Akira*
*✗⃝* ${prefix}luxury *Akira*
*✗⃝* ${prefix}cloud *Akira*
*✗⃝* ${prefix}summersand *Akira*
*✗⃝* ${prefix}horrorblood *Akira*
*✗⃝* ${prefix}thunder *Akira*
*✗⃝* ${prefix}shadow
*✗⃝* ${prefix}cup
*✗⃝* ${prefix}cup1
*✗⃝* ${prefix}romance
*✗⃝* ${prefix}smoke
*✗⃝* ${prefix}burnpaper
*✗⃝* ${prefix}lovemessage
*✗⃝* ${prefix}undergrass
*✗⃝* ${prefix}love
*✗⃝* ${prefix}coffe
*✗⃝* ${prefix}woodheart
*✗⃝* ${prefix}woodenboard
*✗⃝* ${prefix}summer3d
*✗⃝* ${prefix}wolfmetal
*✗⃝* ${prefix}nature3d
*✗⃝* ${prefix}underwater
*✗⃝* ${prefix}golderrose
*✗⃝* ${prefix}summernature
*✗⃝* ${prefix}letterleaves
*✗⃝* ${prefix}glowingneon
*✗⃝* ${prefix}fallleaves
*✗⃝* ${prefix}flamming
*✗⃝* ${prefix}harrypotter
*✗⃝* ${prefix}carvedwood
*✗⃝* ${prefix}wetglass
*✗⃝* ${prefix}multicolor3d
*✗⃝* ${prefix}watercolor
*✗⃝* ${prefix}luxurygold
*✗⃝* ${prefix}galaxywallpaper
*✗⃝* ${prefix}lighttext
*✗⃝* ${prefix}beautifulflower
*✗⃝* ${prefix}puppycute
*✗⃝* ${prefix}royaltext
*✗⃝* ${prefix}heartshaped
*✗⃝* ${prefix}birthdaycake
*✗⃝* ${prefix}galaxystyle
*✗⃝* ${prefix}hologram3d
*✗⃝* ${prefix}glossychrome
*✗⃝* ${prefix}greenbush
*✗⃝* ${prefix}metallogo
*✗⃝* ${prefix}noeltext
*✗⃝* ${prefix}glittergold
*✗⃝* ${prefix}textcake
*✗⃝* ${prefix}starsnight
*✗⃝* ${prefix}wooden3d
*✗⃝* ${prefix}textbyname
*✗⃝* ${prefix}writegalacy
*✗⃝* ${prefix}galaxybat
*✗⃝* ${prefix}snow3d
*✗⃝* ${prefix}birthdayday
*✗⃝* ${prefix}goldplaybutton
*✗⃝* ${prefix}silverplaybutton
*✗⃝* ${prefix}freefire
*╰─────────────*
*╭──「 STICKER MENU 」*
*✗⃝* ${prefix}tourl *reply foto/video*
*✗⃝* ${prefix}sticker *reply foto*
*✗⃝* ${prefix}take *name|pack*
*✗⃝* ${prefix}toimg *reply sticker*
*✗⃝* ${prefix}tomp4 *reply sticker gerak*
*✗⃝* ${prefix}tomp3 *reply video*
*✗⃝* ${prefix}ssweb *Link*
*✗⃝* ${prefix}nulis *Akira*
*✗⃝* ${prefix}emoji *emojinya*
*✗⃝* ${prefix}faktaunik
*✗⃝* ${prefix}katabijak
*✗⃝* ${prefix}pantun
*✗⃝* ${prefix}bucin
*✗⃝* ${prefix}quotes
*✗⃝* ${prefix}quotesanime
*✗⃝* ${prefix}quotesdilan
*✗⃝* ${prefix}cerpen
*✗⃝* ${prefix}ppcp
*✗⃝* ${prefix}darkjokes
*✗⃝* ${prefix}lovelive
*✗⃝* ${prefix}sao
*✗⃝* ${prefix}hsdxd
*✗⃝* ${prefix}meme
*╰─────────────*
*╭──「 18+ MENU 」*
*✗⃝* ${prefix}waifu
*✗⃝* ${prefix}loli
*✗⃝* ${prefix}husbu
*✗⃝* ${prefix}milf
*✗⃝* ${prefix}cosplay
*✗⃝* ${prefix}wallml
*✗⃝* ${prefix}hentai
*✗⃝* ${prefix}chiisaihentai
*✗⃝* ${prefix}trap
*✗⃝* ${prefix}blowjob
*✗⃝* ${prefix}yaoi
*✗⃝* ${prefix}ecchi
*✗⃝* ${prefix}ahegao
*✗⃝* ${prefix}hololewd
*✗⃝* ${prefix}sideoppai
*✗⃝* ${prefix}animefeets
*✗⃝* ${prefix}animebooty
*✗⃝* ${prefix}animethighss
*✗⃝* ${prefix}hentaiparadise
*✗⃝* ${prefix}animearmpits
*✗⃝* ${prefix}hentaifemdom
*✗⃝* ${prefix}lewdanimegirls
*✗⃝* ${prefix}biganimetiddies
*✗⃝* ${prefix}animebellybutton
*✗⃝* ${prefix}hentai4everyone
*✗⃝* ${prefix}bj
*✗⃝* ${prefix}ero
*✗⃝* ${prefix}cum
*✗⃝* ${prefix}feet
*✗⃝* ${prefix}yuri
*✗⃝* ${prefix}trap
*✗⃝* ${prefix}lewd
*✗⃝* ${prefix}feed
*✗⃝* ${prefix}eron
*✗⃝* ${prefix}solo
*✗⃝* ${prefix}gasm
*✗⃝* ${prefix}poke
*✗⃝* ${prefix}anal
*✗⃝* ${prefix}holo
*✗⃝* ${prefix}tits
*✗⃝* ${prefix}kuni
*✗⃝* ${prefix}kiss
*✗⃝* ${prefix}erok
*✗⃝* ${prefix}smug
*✗⃝* ${prefix}baka
*✗⃝* ${prefix}solog
*✗⃝* ${prefix}feetg
*✗⃝* ${prefix}lewdk
*✗⃝* ${prefix}waifu
*✗⃝* ${prefix}pussy
*✗⃝* ${prefix}femdom
*✗⃝* ${prefix}cuddle
*✗⃝* ${prefix}hentai
*✗⃝* ${prefix}eroyuri
*✗⃝* ${prefix}cum_jpg
*✗⃝* ${prefix}erofeet
*✗⃝* ${prefix}holoero
*✗⃝* ${prefix}classic
*✗⃝* ${prefix}erokemo
*✗⃝* ${prefix}fox_girl
*✗⃝* ${prefix}futanari
*✗⃝* ${prefix}lewdkemo
*✗⃝* ${prefix}wallpaper
*✗⃝* ${prefix}pussy_jpg
*✗⃝* ${prefix}kemonomimi
*✗⃝* ${prefix}nsfw_avatar
*╰─────────────*
*╭──「 DOWNLOAD MENU 」*
*✗⃝* ${prefix}play *query*
*✗⃝* ${prefix}ytmp4 *linkYT*
*✗⃝* ${prefix}ytmp3 *linkYT*
*✗⃝* ${prefix}tiktokdl *linkTT*
*✗⃝* ${prefix}tiktokmp4 *linkTT*
*✗⃝* ${prefix}tiktokmp3 *linkTT*
*✗⃝* ${prefix}igdl *linkIG*
*✗⃝* ${prefix}mediafire *link*
*╰─────────────*
*╭──「 GAME MENU 」*
*✗⃝* ${prefix}suit
*✗⃝* ${prefix}bisakah
*✗⃝* ${prefix}kapankah
*✗⃝* ${prefix}rate
*✗⃝* ${prefix}apakah
*✗⃝* ${prefix}gantengcek
*✗⃝* ${prefix}cantikcek
*✗⃝* ${prefix}cekme
*✗⃝* ${prefix}jadian
*✗⃝* ${prefix}truth
*✗⃝* ${prefix}dare
*✗⃝* ${prefix}tebakgambar
*✗⃝* ${prefix}family100
*╰─────────────*
*╭──「 ASUPAN MENU 」*
*✗⃝* ${prefix}cogan
*✗⃝* ${prefix}cecan
*✗⃝* ${prefix}cecanvietnam
*✗⃝* ${prefix}cecanrandom
*✗⃝* ${prefix}santuy
*✗⃝* ${prefix}ukhti
*✗⃝* ${prefix}bocil
*✗⃝* ${prefix}ghea
*✗⃝* ${prefix}rika
*✗⃝* ${prefix}cecanmalaysia
*✗⃝* ${prefix}cecankorea
*✗⃝* ${prefix}cecanjapan
*✗⃝* ${prefix}cecanindonesia
*✗⃝* ${prefix}cecanthailand
*╰─────────────*

*──────" 𝕰𝖓𝖉𝖎𝖓𝖌 𝕺𝖋 𝕸𝖊𝖓𝖚 "──────*`
var imgs = await KirBotz.prepareMessage('0@c.us', qrgopay, image, { thumbnail: qrgopay })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await KirBotz.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `All Menu`,
                        "description": menunyangen,
                        "footerText": `©KirBotz`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "9999999999",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "999999999",
                        "retailerId": `SUBSCRIBE YT : KirBotz×`,
                        "url": "https://wa.me/6287705048235"
                    },
                    "businessOwnerJid": "6287705048235@s.whatsapp.net",
                }
            }, { quoted: fgi, mimetype: 'image/jpeg' })
            KirBotz.relayWAMessage(ctlg)
            break
///////GAME//////
case 'truth':
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              KirBotz.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: fgi })
              break
case 'dare':
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await KirBotz.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:'*Dare*\n\n'+ der,buttons,headerType:4}
              prep = await KirBotz.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgi})
              KirBotz.relayWAMessage(prep)
              break		
case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
case 'cekme':
  reply("Loading. . .")
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
					var hoby = ['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Iyaa cakep kek mimin','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget kek mimin😍','❌','✔️']
					var wetak= ['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					try {
					profil = await KirBotz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `*≡════《 Cek Sifat @${bet.split('@')[0]} 》════≡*

*Nama :* ${pushname}
*Sifat :* ${sipat}
*Hobby :* ${biho}
*Bucin :* ${bhucin}%
*Sange :* ${senga}%
*Cakep :* ${chakep}
*Watak :* ${watak}
*Akhlak Baik :* ${baik}%
*Akhlak Buruk :* ${burug}%
*Kecerdasan :* ${cerdas}%
*Keberanian :* ${berani}%
*Ketakutan :* ${takut}%

*≡═════《 CEKSIFATME 》═════≡*`
					buff = await getBuffer(profil)
					KirBotz.sendMessage(from, buff, image, {quoted: fgi, caption: profile, contextInfo: { mentionedJid: [bet]}})
					break
case 'bisakah':
if (args.length < 1) return reply(`Contoh : ${prefix}bisakah aku terbang`)
naon = ["Iya","Tidak","Mungkin"]
random = naon[Math.floor(Math.random() * (naon.length))]
tt = `Jawaban : ${random}`
reply(tt)
break
case 'kapankah':
if (args.length < 1) return reply(`Contoh : ${prefix}kapankah aku menikah`)
no = `${Math.floor(Math.random() * 100)}`
naon = ["Jam lagi","Hari lagi","Minggu lagi","Bulan lagi","Tahun lagi"]
random = naon[Math.floor(Math.random() * (naon.length))]
kapan = `Jawaban : ${no} ${random}`
reply(kapan)
break      	   
case 'rate':
if (args.length < 1) return reply(`Contoh : ${prefix}rate aku ganteng`)
random = `${Math.floor(Math.random() * 100)}`
rating = `Persentase : ${random}%`
reply(rating)
break
case 'apakah':
if (args.length < 1) return reply(`Contoh : ${prefix}apakah aku jelek`)
naon = ["Iya","Tidak","Mungkin"]
random = naon[Math.floor(Math.random() * (naon.length))]
tz = `Jawaban = ${random}`
reply(tz)
break
case 'gantengcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}gantengcek Mimin`) 
  random = `${Math.floor(Math.random() * 100)}`
  cek = `Persentase : ${random}%`
  KirBotz.sendMessage(from, cek, text, {quoted: fgi})
break
case 'cantikcek':
  if (args.length < 1) return reply(`Contoh : ${prefix}cantikcek Jeje`)
  random = `${Math.floor(Math.random() * 100)}`
  can = q
  cek = `Persentase : ${random}%`
  KirBotz.sendMessage(from, cek, text, {quoted: fgi})
break
case 'family100':
				data = fs.readFileSync('./V2/family100.js');
                fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					KirBotz.sendMessage(from, '*➸ Jawaban :* \n'+randKey.result.jawaban +'', text, {quoted: fgi}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					KirBotz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					KirBotz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					KirBotz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					KirBotz.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: fgi }) // ur cods
					}, 0) // 1000 = 1s,
					break
case 'tebakgambar':
sticWait(from)
data = fs.readFileSync('./V2/tebakgambar.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randSoal =await getBuffer(randKey.result.soalImg)
setTimeout( () => {
KirBotz.sendMessage(from, '*➸ Jawaban :* '+ randKey.result.jawaban +'\n', text, {quoted: fgi}) // ur cods
}, 30000) // 1000 = 1s,
setTimeout( () => {
KirBotz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
KirBotz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
KirBotz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
}, 2500) // 1000 = 1s,
setTimeout( () => {
KirBotz.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: fgi, thumbnail: Buffer.alloc(0) }) // ur cods
}, 0) // 1000 = 1s,
break
case 'suit': 
		     if (!isGroup) return reply('Khusus Group')
		     but = [
         { buttonId: `${prefix}suitnya batu`, buttonText: { displayText: 'BATU✊' }, type: 1 },
         { buttonId: `${prefix}suitnya gunting`, buttonText: { displayText: 'GUNTING✌️' }, type: 1 },
         { buttonId: `${prefix}suitnya kertas`, buttonText: { displayText: 'KERTAS✋' }, type: 1 }
         ]
         sendButton(from, `Silahkan Pilih Kak ${pushname}`, fake, but)
         break
case 'suitnya':
					if (!isGroup) return reply('Khusus Group')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nBot *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nBot *Batu*\nKamu Kalah 😆",
					    "Kamu *Gunting*\nBot *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nBot *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nBot *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nBot *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nBot *Gunting*\nKamu Menang 😔",
					    "Kamu *Batu*\nBot *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nBot *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih Gunting/Batu/Kertas')
					}
           break
///////
case 'bugreport':
              if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 
              teks = args.join(' ')
              reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
              KirBotz.sendMessage('6287705048235@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
              break
case 'ssweb':
case 'ss':
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					KirBotz.sendMessage(from, buff, image, {quoted: fgi, caption : teks})
					break
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  var bb = await KirBotz.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
            var buttonnsss = [{buttonId:`${prefix + command}`,buttonText: {displayText: 'Next️'}, type: 1}]
            var ButtonssMessages = {
            contentText: `*Subrek YT : KirBotz×*`,
            buttons: buttonnsss,
            footerText: `Klik Next Untuk Melanjutkan`,
            headerType: 4,
            imageMessage: bb.message.imageMessage
            }
            await KirBotz.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted : fgi})
            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
                sticWait(from)
                hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
                but = [
                { buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT☕' }, type: 1 }
                       ]
                sendButImage(from, `RANDOM`, `KirBotz c٥ʷₚͦ៰ᷜ⍳٥ˢ`, hasil, but)
                    break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'hentai':
case 'eroyuri':
case 'cum_jpg':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
                sticWait(from)
                hasil = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`)
                but = [
                { buttonId: `${prefix + command}`, buttonText: { displayText: 'NEXT☕' }, type: 1 }
                       ]
                sendButImage(from, `RANDOM`, `KirBotz c٥ʷₚͦ៰ᷜ⍳٥ˢ`, hasil, but)
                    break
case 'wasted':
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !akira.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
			owgi = await KirBotz.downloadAndSaveMediaMessage(ger)
			data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
			buff = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=KirBotzzz01&img=${data.display_url}`)
			KirBotz.sendMessage(from, buff, image, {quoted: akira, caption: kirr.success})
		    } else {
			reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
		    }
		    break
case 'cogan':
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=${lolkey}`)
wmn = `🐧KirBotz`
trans = `Subrek YT : KirBotz×`
but = [
          { buttonId: `${prefix}cogan`, buttonText: { displayText: '🔖 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecan':
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=${lolkey}`)
wmn = `🐧KirBotz`
trans = `Subrek YT : KirBotz×`
but = [
          { buttonId: `${prefix}cecan`, buttonText: { displayText: '🔖 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecanvietnam':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
KirBotz.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Lupa Subscribe YT : KirBotz×'})
break
case 'cecanrandom':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, image, {quoted: fgi, caption: ''})
break
case 'hijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'santuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ukhti':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'bocil':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ghea':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'rika':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
buffer = await getBuffer(ini.result.url)
KirBotz.sendMessage(from, buffer, video, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanmalaysia':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
KirBotz.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecankorea':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
KirBotz.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanindonesia':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
KirBotz.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanjapan':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
KirBotz.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanthailand':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=ZeroYT7`)
reply(`✍️Tunggu Sebentar....`)
goo = await getBuffer(huft.result.url)
KirBotz.sendMessage(from, goo, image, {quoted: fgi, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'sewabot':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
Yakin Nih Mau Sewa Bot ? 🤔 Boong Auto Banned >_<`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `
${wib} *𝑾𝒊𝒃*
${wita} *𝑾𝒊𝒕𝒂*
${wit} *𝑾𝒊𝒕*
Jam : *${time}*
Runtime : *${runtime(process.uptime())}*
𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ`, buttons: [{ buttonId: `${prefix}sewa1`, buttonText: { displayText: '🗿Ya' }, type: 1 },{ buttonId: `${prefix}gk`, buttonText: { displayText: '👀Tidak' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogomenu, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'sewa1':
 listMsg = {
 buttonText: 'LIST SEWA',
 footerText: 'Lord KirBotz×',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan Pilih List Sewabot`,
 sections: [
                     {
                      "title": `${ucapanWaktu} - ${tanggal}`,
 rows: [
                          {
                              "title": "1 BULAN",
                              "rowId": `${prefix}waktu 1bulan`
                           },
                           {
                              "title": "2 BULAN",
                              "rowId": `${prefix}waktu 2bulan`
                           },
                           {
                              "title": "6 BULAN",
                              "rowId": `${prefix}waktu 6bulan`
                           },
                           {
                              "title": "PERPANJANG",
                              "rowId": `${prefix}waktu panjang`
                           }
                        ]
                     }],
 listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fgi})
break
case 'waktu':
if((args[0]) == '1bulan'){
            saa =`${harga1bulan}`            
            var buttonpulsa = [{buttonId: `${prefix}via payment`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrgopay`, buttonText: {displayText: 'QR GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrall`, buttonText: {displayText: 'QR ALL'}, type: 1}
                                ]
            var buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saa}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonpulsa,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
            } else
if ((args[0]) == '2bulan'){
            pay =`${harga2bulan}`            
            var buttongopay = [{buttonId: `${prefix}via payment`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrgopay`, buttonText: {displayText: 'QR GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrall`, buttonText: {displayText: 'QR ALL'}, type: 1}
                                ]
            var buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${pay}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttongopay,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
            } else
if ((args[0]) == '6bulan'){
            voo =`${harga6bulan}`            
            var buttonovo = [{buttonId: `${prefix}via payment`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrgopay`, buttonText: {displayText: 'QR GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrall`, buttonText: {displayText: 'QR ALL'}, type: 1}
                                ]
            var buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
            } else
if ((args[0]) == 'panjang'){
            voo =`${hargaperpanjang}`            
            var buttonovo = [{buttonId: `${prefix}via payment`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrgopay`, buttonText: {displayText: 'QR GOPAY'}, type: 1},
                                {buttonId: `${prefix}qrall`, buttonText: {displayText: 'QR ALL'}, type: 1}
                                ]
            var buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
            }
            break
case 'payment':
case 'donasi':
 listMsg = {
 buttonText: 'PAYMENT',
 footerText: 'Lord KirBotz×',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan Pilih List Payment`,
 sections: [
                     {
                      "title": `${ucapanWaktu} - ${time}`,
 rows: [
                          {
                              "title": "QR ALL PAYMENT",
                              "rowId": `${prefix}qrall`
                           },
                           {
                              "title": "QR GOPAY",
                              "rowId": `${prefix}qrgopay`
                           },
                           {
                              "title": "NOMOR GOPAY",
                              "rowId": `${prefix}via payment`
                           }
                        ]
                     }],
 listType: 1
}
KirBotz.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:akira})
break
case 'qrall':
jangannti = '6287705048235'
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `Silahkan Scan Di Atas
Kalau Udah Kirim ScreenShot 
Bukti Transper Ke Owner
Chat wa.me/${jangannti}

*${tanggal}*
`, buttons: [{ buttonId: `${prefix}ok`, buttonText: { displayText: ' OK ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: qrall, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'qrgopay':
jangannti = '6287705048235'
totalChat = await KirBotz.chats.all()
groups = KirBotz.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = KirBotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `Silahkan Scan Di Atas
Kalau Udah Kirim ScreenShot 
Bukti Transper Ke Owner
Chat wa.me/${jangannti}

*${tanggal}*
̵`, buttons: [{ buttonId: `${prefix}ok`, buttonText: { displayText: ' OK ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: qrgopay, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'via':
if ((args[0]) == 'payment'){
            voto =`*NOMOR :* ${gopay}`            
            var buttonovo = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            var buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voto}`,
			footerText: 'Jika Sudah Transfer Langsung Pencet Owner Di Bawah',
			buttons: buttonovo,
			headerType: 1
			}
            KirBotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./V4/fakeakira.jpeg')}}}})
                   
            }
            break
case 'dmff':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 DIAMOND FF 」*
• *12 DIAMOND = 2.000*
• *20 DIAMOND = 3.000*
• *50 DIAMOND = 7.000*
• *70 DIAMOND = 10.000*
• *100 DIAMOND = 14.000*
• *140 DIAMOND = 19.000*
• *150 DIAMOND = 20.000*
• *210 DIAMOND = 28.000*
• *280 DIAMOND = 37.000*
• *355 DIAMOND = 47.000*
• *425 DIAMOND = 56.000*
• *500 DIAMOND = 65.000*
• *635 DIAMOND = 83.000*
• *720 DIAMOND = 92.000*
• *1.075 DIAMOND = 138.000*
• *2.000 DIAMOND = 251.000*
• *3.440 DIAMOND = 434.000*
• *4.000 DIAMOND = 500.000*
• *6.000 DIAMOND = 750.000*
• *7.290 DIAMOND = 918.000*
• *8.010 DIAMOND = 1.167.600*

*「 Member Ship 」*
• *MM = Rp 29.000*
• *MB = Rp 140.000*
̵`, buttons: [{ buttonId: `${prefix}format`, buttonText: { displayText: 'メ FORMAT メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogomenu, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'dmml':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*「 DIAMOND ML 」*
• *5 DIAMOND = 2.000*
• *12 DIAMOND = 4.000*
• *19 DIAMOND = 6.000*
• *28 DIAMOND = 9.000*
• *36 DIAMOND = 11.000*
• *86 DIAMOND = 21.000*
• *172 DIAMOND = 41.000*
• *257 DIAMOND = 61.000*
• *343 DIAMOND = 81.000*
• *429 DIAMOND = 102.000*
• *514 DIAMOND = 122.000*
• *600 DIAMOND = 142.000*
• *706 DIAMOND = 163.000*
• *878 DIAMOND = 204.000*
• *963 DIAMOND = 224.000*
• *1.049 DIAMOND = 244.000*

*「 Starlight Member 」*
• *SM = 134.000*
• *TP = 134.000*
• *SMP = 305.000*
̵`, buttons: [{ buttonId: `${prefix}format`, buttonText: { displayText: 'メ FORMAT メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogomenu, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'format':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `*Sebelum lanjut, Mohon diisi dulu !!*

*𖣘 ɴᴀᴍᴀ :*
*𖣘 ɪᴅ :*
*𖣘 ɴᴏᴍɪɴᴀʟ :*
*𖣘 ʜᴀʀɢᴀ ᴅɪᴀᴍᴏɴᴅ :*
*Pastikan Format Benar !!*
*Jika Salah Isi Format Maka Diamond Gak Masuk*
*Kami tidak akan bertanggung jawab !!*
*Jika Sudah Selesai Isi Format Harap Kirim Ke Owner !!*
*Terima kasih*

${tanggal}
̵`, buttons: [{ buttonId: `${prefix}payment`, buttonText: { displayText: 'メ PAYMENT メ' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'メ OWNER メ' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogomenu, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'script':
case 'sc':
reply(`Mo Script Bot nya bang??
Cek Yt Owner Ku
https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg
`)
break
case 'rules':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}
𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯
❒͡ 1. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 2. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒆𝒑𝒐𝒏 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ*
❒͡ 3. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑩𝒂𝒏𝒅𝒊𝒏𝒈 𝑩𝒐𝒕𝒛
      *sᴀɴᴋsɪ : ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ*

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
_*https://wa.me/6287705048235*_`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `
*Jika Sudah Paham Rules Nya Silahkan Pencet Di Bawah Jika Tidak Kelihatan Ketik .menu*
̵`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'メ Menu' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogorules, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'runtime':
reply(`Aktip Selama ${runtime(process.uptime())}\n\n${wib} *WIB*\n${wit} *WIT*\n${wita} *WITA*`)
break
case 'owner':
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'N:Sy;Bot;;;\n' +
            `FN:${ownerName}\n` +
            `item1.TEL;waid=${owner}:${owner}\n` +
            `item1.X-ABLabel:👑 Creator\n` +
            `item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n` +
            `item2.X-ABLabel:📧 Email\n` +
            `item3.URL:https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg/\n` +
            `item3.X-ABLabel:⚙️ Channel Owner\n` +
            `item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
            `item4.X-ABADR:ac\n` +
            `item4.X-ABLabel:🌍 Region\n` +
            `item5.X-ABLabel:⚔️ Kir - Botz Developer\n` +
            'END:VCARD'.trim()
KirBotz.sendMessage(from, {displayName: `Creator Akira`, vcard: vcard2}, contact, 
{ quoted: akira, 
})
menuh = `Hai Kak @${sender.split('@')[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, 
footerText: `Tuh Owner Ku Kak >_<
Jangan Macem² Yah Kak`,
buttons: [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OK SIAP' }, type: 1 }
         ], 
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: nilogoowner, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'ytowner':
reply (`*Subrek Kak*\nhttps://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`)
break
case 'igowner':
reply (`*Follow Kak*\nhttps://www.instagram.com/kirbotzx/`)
break
case 'ttowner':
reply (`*Follow Kak*\nhttps://vt.tiktok.com/ZSeuqHvL5/`)
break
case 'gtowner':
reply (`*Follow Kak*\nhttps://github.com/KrBtz/`)
break
case 'gckirbotz':
reply (`*Join Kak*\nhttps://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ`)
break
case 'bc':
             if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
             if (args.length < 1) return reply('teks?')
             anu = await KirBotz.chats.all()
             if (isMedia && !akira.message.videoMessage || isQuotedImage) {
             var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
             bc = await KirBotz.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             KirBotz.sendMessage(_.jid, bc, image, {quoted:fgi,caption: `「 𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ 」\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
KirBotz.sendMessage(_.jid, 
	    {"contentText": `「 𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ 」\n\n${body.slice(4)}`,
	    "footerText": `*𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ || ${tanggal}*`,
	    "buttons": [
	    {"buttonId": `.menu`,
	    "buttonText": {"displayText": "MENU"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:fgi})
}
             reply('Suksess broadcast')
}
             break
case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(kirr.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return reply ('pastikan link sudah benar!')
            var response = await KirBotz.acceptInvite(codeInvite)
            reply('SUKSES')
            } catch {
            reply('LINK ERROR!')
            }
            break
case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
case 'quotes':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*â€• ${author}*`)
                    break
case 'quotesanime':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
                    break
case 'quotesdilan':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
case 'cerpen':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    titid = ini_txt
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
case 'lolkey': 
case 'cekapikey':
              if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 
              data = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${q}`)
              teks = `*YOUR APIKEY*\n\n➸ Ussername= ${data.result.username}\n➸ Request= ${data.result.requests}\n➸ Today= ${data.result.today}\n➸ Akun Type= ${data.result.account_type}\n➸ Expired= ${data.result.expired}\n➸ API = https://api.lolhuman.xyz`
              KirBotz.sendMessage(from, teks, text, {quoted: akira})
              break
case 'coolgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/coolgravity?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : akira})
                    })
                    break
case 'nulis':
               if (args.length < 1) return reply('Yang Mau Di Tulis Apaan Anjing')
               teks = args.join(' ')
               sticWait(from)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               KirBotz.sendMessage(from, buff, image, {quoted: fgi, caption: kirr.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
case 'take':
case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await KirBotz.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('../V2/fetcher').createExif(satu, dua)
			require('../V2/fetcher').modStick(media, KirBotz, akira, from)
			break
case 'tourl':
               if ((isMedia && !akira.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               sticWait(from)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
               owgi = await KirBotz.downloadMediaMessage(boij)
               res = await upload(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
case 'igdl': 
case 'instagram':
case 'instagramdownload':
              if (!q) return reply('Link Yang Mana?')
              if (!q.includes('instagram')) return reply(`error bang`)
              sticWait(from)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, akira) })
             .catch((err) => { reply(String(err)) })
              break
case 'mediafire':
              if (args.length < 1) return reply('Link Nya Mana? ')
              if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(kirr.error.Iv)
              teks = args.join(' ')
              res = await mediafireDl(teks)
              result = `MediaFire Downloader
               
Nama : ${res[0].nama}
Ukuran : ${res[0].size}
Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
              reply(result)
              sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: fgi})
              break
case 'play':
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
             sticWait(from)
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             var { thumb, title, filesizeF, filesize } = res
             var capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}
•⚡ Link Video : ${yut.videos[0].url}`
             ya = await getBuffer(thumb)
             py =await KirBotz.prepareMessage(from, ya, image)
             sendButloc(from,monospace(capti),'',`Powered By *KirBotz*`,[{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}
],null,null,ya)
})
break
case 'ytmp3':
        if (args.length < 1) return reply('Link Nya Mana?')
        if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Nya Error Ngentod')
        reply("Sedang Mendownload Audio")
        teks = args.join(' ')
        res = await y2mateA(teks)
        sendFileFromUrl(res[0].link, document, {quoted: akira, mimetype: 'audio/mp3', filename: res[0].output})
        break
case 'ytmp4':
        if (args.length < 1) return reply('Link Nya Mana?')
        if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Nya Error Ngentod')
        reply("Sedang Mendownload Video")
        teks = args.join(' ')
        res = await y2mateV(teks)
        sendFileFromUrl(res[0].link, document, {quoted: akira, mimetype: 'video/mp4', filename: res[0].output})
        break
case 'tiktokdl':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(`Link Error Tod`)
thu = await KirBotz.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `*Hai* 𝐊𝐚𝐤 @${sender.split("@")[0]}`
KirBotz.sendMessage(from, { contentText: `${menuh}`, footerText: `Pencet Button Di Bawah
𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ`, buttons: [{ buttonId: `${prefix}tiktokmp4 ${q}`, buttonText: { displayText: 'VIDEO' }, type: 1 },{ buttonId: `${prefix}tiktokmp3 ${q}`, buttonText: { displayText: 'AUDIO' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: logonyatod, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'tiktokmp4':
 		if (!q) return reply('Linknya?')
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(kirr.Iv)
 		sticWait(from)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		var { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `Make Doang Gak Follow🙄Gak Malu?\nFollow Nih https://www.instagram.com/kirbotz×/`
		KirBotz.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:akira,caption:me})
		})
		})
     		break
case 'tiktokmp3':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             sticWait(from)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
             KirBotz.sendMessage(from, get_audio, audio, { mimetype:'audio/mp4', ptt:true, quoted:akira,contextInfo: {forwardingScore: 508, isForwarded: true}})
             break
case 'slow':
            if (!isQuotedVideo) return reply('Reply videonya!')
            sticWait(from)
            encmedia = JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await KirBotz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            KirBotz.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: fgi })
            fs.unlinkSync(ran)
            })
            break
case 'asmaulhusna':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
case 'kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
case 'jadwalsholat':	
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
case 'semoji':
case 'emoji':
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolkey}`)
              await KirBotz.sendMessage(from, ini_buffer, sticker, { quoted: akira })
              break
/////\\\\\
case 'ppcp':
sticWait(from)
anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
cewe = await getBuffer(anu.result.female)
cowo = await getBuffer(anu.result.male)
KirBotz.sendMessage(from, cowo, image, {quoted: fgi, caption: 'Nih Versi Cowo Nya ^_^' })
KirBotz.sendMessage(from, cewe, image, {quoted: fgi, caption: 'Nih Versi Cewe Nya ^_^' })
break
case 'hsdxd':
sticWait(from)
				 KirBotz.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./V2/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 KirBotz.sendMessage(from, highschooldxd, image, {quoted: fgi, caption: 'NIH BANG '})
				break
case 'sao':
sticWait(from)
				 KirBotz.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./V2/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 KirBotz.sendMessage(from, swordartonline, image, {quoted: fgi, caption: 'swort art online\nMEZ RazoR'})
				break
case 'lovelive':
sticWait(from)
				 KirBotz.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./V2/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 KirBotz.sendMessage(from, lovelive, image, {quoted: fgi, caption: 'NIH BANG '})
				break
case 'darkjokes':
sticWait(from)
					data = fs.readFileSync('./V2/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					KirBotz.sendMessage(from, hasil, image, {quoted: fgi, caption: '*GELAP BOS :V*'})
				break
case 'meme':
sticWait(from)
				KirBotz.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./V2/meme.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
                 KirBotz.sendMessage(from, memeall, image, {quoted: fgi, caption: '*YT = KirBotz×*'})
				break
////\\\\\
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : fgi}) 
                    })
                    break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : fgi})
                    })
                    break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Mimin Gantenk`)
                    sticWait(from)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                    KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : akira})
                    })
                    break
case 'tiktok':
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Mimin Gantenk`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : akira})
                    })
                    break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Akira Botz`)
                    sticWait(from)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        KirBotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : akira})
                    })
                    break
case 'hentai':
              sticWait(from)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolkey}`).then((gambar) => {
              KirBotz.sendMessage(from, gambar, image, { quoted: akira })
}) 
              break
case 'public':
if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (banChats === false) return
uptime = process.uptime()
banChats = false
reply(`「 *PUBLIC-MODE* 」`)
break
case 'self':
if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (banChats === true) return
uptime = process.uptime()
banChats = true
reply(`「 *SELF-MODE* 」`)
break
case 'tomp4':
               if ((isMedia && !akira.message.videoMessage || isQuotedSticker) && args.length == 0) {
               sticWait(from)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(akira).replace('quotedM','m')).message.extendedTextMessage.contextInfo : akira
               mediaaa = await KirBotz.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               KirBotz.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: akira, caption: kirr.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(kirr.wrongFormat)
}
               break
case 'tomp3':
            if (!isQuotedVideo) return reply('Reply videonya!')
            sticWait(from)
            encmedia = JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await KirBotz.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            KirBotz.sendMessage(from, buffer453, audio, { mimetype:'audio/mp4', ptt:true, quoted:akira,contextInfo: {forwardingScore: 508, isForwarded: true}})
            fs.unlinkSync(ran)
            })
            break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !akira.message.videoMessage || isQuotedImage) && args.length == 0) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : akira
var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, './V3/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(kirr.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subrek YT : KirBotz×`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && akira.message.videoMessage.seconds < 11 || isQuotedVideo && akira.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
var encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : akira
var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, './V3/media_user')
ran = getRandom('.webp')
sticWait(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : akira
var media = await KirBotz.downloadAndSaveMediaMessage(encmedia, './V3/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
sticWait(from)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(kirr.error.stick)
KirBotz.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: akira })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(akira).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await KirBotz.downloadAndSaveMediaMessage(encmedia, './V3/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subrek YT : KirBotz×`)
fs.unlinkSync(ran)
})
break
case 'welcome':
        if (!akira.key.fromMe) return
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」`, [
          {
            buttonId: `${prefix}welco enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}welco disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'welco':
               if (!isGroup) return reply(kirr.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./V3/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./V3/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'antilink':
        if (!akira.key.fromMe) return;
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」`, [
          {
            buttonId: `${prefix}anti enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}anti disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'anti':
              if (!isGroup) return reply(kirr.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./V3/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./V3/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
case 'antilinkyt':
        if (!akira.key.fromMe) return;
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」`, [
          {
            buttonId: `${prefix}antiyt enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}antiyt disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'antiyt':
              if (!isGroup) return reply(kirr.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLinkyt) return reply(`Udah aktif`)
              antilinkyt.push(from)
              fs.writeFileSync('./V3/antilinkyt.json', JSON.stringify(antilinkyt))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilinkyt.indexOf(from)
              antilinkyt.splice(anu, 1)
              fs.writeFileSync('./V3/antilinkyt.json', JSON.stringify(antilinkyt))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
case 'antilinkwame':
        if (!akira.key.fromMe) return;
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」`, [
          {
            buttonId: `${prefix}antiwame enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}antiwame disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'antiwame':
              if (!isGroup) return reply(kirr.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLinkwame) return reply(`Udah aktif`)
              antilinkwame.push(from)
              fs.writeFileSync('./V3/antilinkwame.json', JSON.stringify(antilinkwame))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilinkwame.indexOf(from)
              antilinkwame.splice(anu, 1)
              fs.writeFileSync('./V3/antilinkwame.json', JSON.stringify(antilinkwame))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
case 'antivirtex':
        if (!akira.key.fromMe) return;
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」`, [
          {
            buttonId: `${prefix}antivrtx enable`,
            buttonText: {
              displayText: `⬡ ON `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}antivrtx disable`,
            buttonText: {
              displayText: `⬡ OFF`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'antivrtx':
               if (!isGroup) return reply(kirr.only.group)
               if (!isBotGroupAdmins) return reply(`𝑱𝒂𝒅𝒊𝒊𝒏 𝑨𝒅𝒎𝒊𝒏 𝑫𝒖𝒍𝒖 𝑪𝒖𝒌 🗿`)
               if (args[0] == "enable") {
               if (isAntiVirtex) return reply("Udah Aktip");
               antivirtex.push(from);
               fs.writeFileSync("./V3/antivirtex.json", JSON.stringify(antivirtex))
               reply("Sukses mengaktifkan fitur antivirtex di group ini ✅")
               } else if (args[0] == "disable") {
               antivirtex.splice(from, 1);
               fs.writeFileSync("./V3/antivirtex.json", JSON.stringify(antivirtex))
               reply("Sukses menonaktifkan fitur antivirtex di group ini ✅")
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'add':
             if (akira.message.extendedTextMessage === null || akira.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             KirBotz.groupAdd(from, [entah])
             } else {
             entah = akira.message.extendedTextMessage.contextInfo.participant
             KirBotz.groupAdd(from, [entah])
}
             break
case 'kick':
if (!isGroup) return reply(kirr.only.group)
if (!akira.key.fromMe && !isGroupAdmins) return reply(kirr.only.admin)
if (!q)return reply(`Format Error!\n\nExample : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(kirr.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
KirBotz.groupRemove(from, [y])
reply(`Succses kick target!`)
break
case 'group':
        sendButMessage(from, `_*Silahkan Di Pilih*_`, `${tanggal}
        「 *𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ* 」`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `⬡ OPEN `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `⬡ CLOSE`,
            },
            type: 1,
          },
        ], {quoted : fgi});
        break;
case 'opengc':
if (!isGroup) return reply(kirr.only.group)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
reply(`Sukses Membuka Grup ${groupName} Kontol`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'closegc':
if (!isGroup) return reply(kirr.only.group)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
reply(`Sukses Menutup Grup ${groupName} Kontol`)
KirBotz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgc':
		     	   if (!isGroup) return reply(kirr.only.group)
                   if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
			       linkgc = await KirBotz.groupInviteCode(from)
				   yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
				   KirBotz.sendMessage(from, yeh, text, { quoted: fgi })
				   break
case 'setname':
if (!q) return reply(`Nama?`)
if (!isGroup) return reply(kirr.only.group)
if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kontol`)
if (!isBotGroupAdmins) return reply(kirr.only.Badmin)
KirBotz.groupUpdateSubject(from, `${body.slice(9)}`)
KirBotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'setdesc':
if (!q) return reply(`teks?`)
if (!isGroup) return reply(kirr.only.group)
if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kontol`)
if (!isBotGroupAdmins) return reply(kirr.only.Badmin)
KirBotz.groupUpdateDescription(from, `${body.slice(9)}`)
KirBotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'tagall':
       if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kontol`)
       if (!isGroup) return reply(kirr.only.group)
              let arr = [];
              let txti = `*[ TAG ALL BY KIRBOTZ ]*\n${q ? q : ''}\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
case 'hidetag':
      if (!akira.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kontol`)
      if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
      if (!isGroup) return reply(kirr.only.group)
             try {
             quotedText = akira.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
default:
if (budy.startsWith('$')){
if (!akira.key.fromMe) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
	}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('ERROR : %s', color(e, 'magenta'))
        }
	}
}