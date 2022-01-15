var {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
var fs = require('fs')
var { wait, forks, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, spinner, globalSpinner, banner, start, info, success, close } = require('./V2/functions')
var { color } = require('./V2/color')
var welcome = require('./V5/group')
var chalk = require('chalk')
var colors = require('colors')
var spin = require('spinnies')
var async = require('async')
var CFonts = require('cfonts')
var os = require('os')

require('./V1/base.js')
nocache('./V1/base.js', module => console.log(`${module} Telah Di Update!`))

var starts = async (Akira = new WAConnection()) => {
                  Akira.logger.level = 'warn'
                  Akira.version = [2, 2143, 3]
                  console.log(color('[ YT : KirBotz× ]', 'cyan'), color('Owner Is Online Now!!!', 'yellow'))
	              console.log(color('[ YT : KirBotz× ]', 'cyan'), color('Welcome Back, Owner! Hope You Are Doing Well~', 'yellow'))
                  Akira.browserDescription = [ 'KirBotz', 'Chrome', '3.0' ]
                  Akira.on('qr', () => {
                  console.log(color('[','red'), color('!','yellow'), color(']','red'), color('Scan Kak', 'white'))
                  })
                  fs.existsSync(`./V1/session/kirbotz.json`) && Akira.loadAuthInfo(`./V1/session/kirbotz.json`)
                  Akira.on('connecting', () => {
		          console.log(color('[ LOADING ]', 'cyan'), color('Loading Bang Sabar Napa.......', 'yellow'));
	              })
                  Akira.on('open', () => {
		          console.log(color('[ SUCCES ]', 'cyan'), color('Bot Online Pliss Subrek YT : KirBotz×', 'yellow'));
	              })
                  await Akira.connect({
		          timeoutMs: 30 * 1000
	              })
fs.writeFileSync(`./V1/session/kirbotz.json`, JSON.stringify(Akira.base64EncodedAuthInfo(), null, '\t'))
                                console.log(color('','aqua'), color(`||================================================||`, "red"))
                                console.log(color(' ||> ','yellow'), color(`𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐊𝐢𝐫𝐁𝐨𝐭𝐳`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐍𝐞𝐰 𝐁𝐚𝐬𝐞 𝐊𝐢𝐫𝐁𝐨𝐭𝐳`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐒𝐮𝐛𝐫𝐞𝐤 𝐘𝐓 𝐊𝐢𝐫𝐁𝐨𝐭𝐳`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐉𝐚𝐧𝐠𝐚𝐧 𝐇𝐚𝐩𝐮𝐬 𝐍𝐚𝐦𝐚 𝐆𝐮𝐚 𝐁𝐚𝐧𝐠`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐇𝐚𝐫𝐠𝐚𝐢 𝐃𝐨𝐧𝐤 𝐀𝐤𝐮 𝐂𝐚𝐩𝐞`, 'magenta'))
                                console.log(color(' ||> ','yellow'), color(`𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐞𝐧𝐢𝐤𝐦𝐚𝐭𝐢 𝐅𝐢𝐭𝐮𝐫𝐧𝐲𝐚`, 'magenta'))
                                console.log(color('','aqua'), color(`||================================================||`, "red"))
                                teks = `https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ`
                                Akira.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
                                console.log(color('|WRN|', 'yellow'), color('Join Group Akira Bot', 'cyan'))
                                Akira.sendMessage(`6287705048235@s.whatsapp.net`, `Hai Owner 👋\nBot Telah Sukses Tersambung Pada Nomor Ini\n*_SUCCES: ADDED FOR SCRIPT BOT INFO BOT SUDAH DI KIRIM KE CREATOR AKIRA_*\n*[TERIMAKASIH]*`, MessageType.extendedText, {sendEphemeral: true, })
                                Akira.sendMessage(`6287705048235@s.whatsapp.net`, `*---DATABASE BOT---*\n\n•NAMA BOT : KirBotz\n•OWNER BOT : Akira\n•NOMER OWNER : wa.me/6287705048235\n\n*[Bot Sudah TerConnect Ke WhatsApp Kak !! Makasih Kak Akira Scriptnyaa Moga Berkembang Terus]*`, MessageType.extendedText, {sendEphemeral: true, })
start('2',colors.bold.white('\nMenunggu Pesan Baru..'));



Akira.on('group-participants-update', async (anu) => {
await welcome(Akira, anu)
})
Akira.on('chat-update', async (message) => {
require('./V1/base.js')(Akira, message)
})
}

            function nocache(module, cb = () => { }) {
            console.log('Module', `'${module}'`, 'is now being watched for changes')
            fs.watchFile(require.resolve(module), async () => {
            await uncache(require.resolve(module))
            cb(module)
            })
            }
            function uncache(module = '.') {
            return new Promise((resolve, reject) => {
            try {
            delete require.cache[require.resolve(module)]
            resolve()
            } catch (e) {
            reject(e)
            }
            })
            }
starts()