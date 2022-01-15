let { WAConnection, MessageType } = require('@adiwajshing/baileys');
let akira = new WAConnection()
let { 
    text, 
    extendedText, 
    contact,
    contactsArray,
    location, 
    liveLocation, 
    image, 
    video, 
    sticker, 
    document, 
    audio, 
    product, 
    listMessage, 
    buttonsMessage, 
    groupInviteMessage 
} = MessageType

var fetch = require('node-fetch');
var axios = require('axios');
var cfonts = require('cfonts');
var moment = require("moment-timezone");
var spin = require('spinnies');
var Crypto = require('crypto');
var figlet = require('figlet');
var fs = require("fs");
var chalk = require('chalk');

var color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
var bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}

var generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

var getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

var getBuffer = async (url, options) => {
	try {
		options ? options : {}
		var res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

var getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

module.exports = {
	generateMessageID,
	getGroupAdmins
}

module.exports.h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

module.exports.getBuffer = async(url, options) => {
try {
		options ? options : {}
		let res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

module.exports.getAdmins = (participants) => {
	admins = []
	for (let i of participants) {
i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

module.exports.getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

var spinner = { 
"interval": 120,
"frames": [
    "",
    "𝐁",
    "𝐁𝐲",
    "𝐁𝐲 ",
    "𝐁𝐲 :",
    "𝐁𝐲 : ",
    "𝐁𝐲 : 𝐋",
    "𝐁𝐲 : 𝐋𝐨",
    "𝐁𝐲 : 𝐋𝐨𝐫",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 ",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨𝐭",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨𝐭𝐳",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨𝐭",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 ",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝",
    "𝐁𝐲 : 𝐋𝐨𝐫",
    "𝐁𝐲 : 𝐋𝐨",
    "𝐁𝐲 : 𝐋",
    "𝐁𝐲 : ",
    "𝐁𝐲 :",
    "𝐁𝐲 ",
    "𝐁𝐲",
    "𝐁",
    "",
    "𝐁",
    "𝐁𝐲",
    "𝐁𝐲 ",
    "𝐁𝐲 :",
    "𝐁𝐲 : ",
    "𝐁𝐲 : 𝐋",
    "𝐁𝐲 : 𝐋𝐨",
    "𝐁𝐲 : 𝐋𝐨𝐫",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 ",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨𝐭",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨𝐭𝐳",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨𝐭",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 ",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝",
    "𝐁𝐲 : 𝐋𝐨𝐫",
    "𝐁𝐲 : 𝐋𝐨",
    "𝐁𝐲 : 𝐋",
    "𝐁𝐲 : ",
    "𝐁𝐲 :",
    "𝐁𝐲 ",
    "𝐁𝐲",
    "𝐁",
    "",
    "𝐁",
    "𝐁𝐲",
    "𝐁𝐲 ",
    "𝐁𝐲 :",
    "𝐁𝐲 : ",
    "𝐁𝐲 : 𝐋",
    "𝐁𝐲 : 𝐋𝐨",
    "𝐁𝐲 : 𝐋𝐨𝐫",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 ",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨𝐭",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨𝐭𝐳",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨𝐭",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 ",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝",
    "𝐁𝐲 : 𝐋𝐨𝐫",
    "𝐁𝐲 : 𝐋𝐨",
    "𝐁𝐲 : 𝐋",
    "𝐁𝐲 : ",
    "𝐁𝐲 :",
    "𝐁𝐲 ",
    "𝐁𝐲",
    "𝐁",
    "",
    "𝐁",
    "𝐁𝐲",
    "𝐁𝐲 ",
    "𝐁𝐲 :",
    "𝐁𝐲 : ",
    "𝐁𝐲 : 𝐋",
    "𝐁𝐲 : 𝐋𝐨",
    "𝐁𝐲 : 𝐋𝐨𝐫",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 ",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨𝐭",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨𝐭𝐳",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨𝐭",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁𝐨",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫𝐁",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢𝐫",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊𝐢",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 𝐊",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝 ",
    "𝐁𝐲 : 𝐋𝐨𝐫𝐝",
    "𝐁𝐲 : 𝐋𝐨𝐫",
    "𝐁𝐲 : 𝐋𝐨",
    "𝐁𝐲 : 𝐋",
    "𝐁𝐲 : ",
    "𝐁𝐲 :",
    "𝐁𝐲 ",
    "𝐁𝐲",
    "𝐁",
    ""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
	spins.add(id, {text: text})
	}
module.exports.info = (id, text) => {
	spins.update(id, {text: text})
}
module.exports.success = (id, text) => {
	spins.succeed(id, {text: text})
	}
module.exports.close = (id, text) => {
	spins.fail(id, {text: text})
}

var ase = new Date();
var waktoonyabro = ase.getHours(); 
switch(waktoonyabro){
case 0: waktoonyabro = `Selamat Malam 🌃`; break;
case 1: waktoonyabro = `Selamat Malam 🌃`; break;
case 2: waktoonyabro = `Selamat Malam 🌃`; break;
case 3: waktoonyabro = `Selamat Pagi ✨`; break;
case 4: waktoonyabro = `Selamat Pagi ✨`; break; 
case 5: waktoonyabro = `Selamat Pagi ✨`; break;
case 6: waktoonyabro = `Selamat Pagi ✨`; break;
case 7: waktoonyabro = `Selamat Pagi ✨`; break;
case 8: waktoonyabro = `Selamat Pagi ✨`; break;
case 9: waktoonyabro = `Selamat Pagi ✨`; break;
case 10: waktoonyabro = `Selamat Pagi ✨`; break;
case 11: waktoonyabro = `Selamat Siang 🔥`; break; 
case 12: waktoonyabro = `Selamat Siang 🔥`; break;
case 13: waktoonyabro = `Selamat Siang 🔥`; break;
case 14: waktoonyabro = `Selamat Siang 🔥`; break;
case 15: waktoonyabro = `Selamat Sore 🌇`; break;
case 16: waktoonyabro = `Selamat Sore 🌇`; break;
case 17: waktoonyabro = `Selamat Sore 🌇`; break;
case 18: waktoonyabro = `Selamat Malam 🌃`; break; 
case 19: waktoonyabro = `Selamat Malam 🌃`; break;
case 20: waktoonyabro = `Selamat Malam 🌃`; break;
case 21: waktoonyabro = `Selamat Malam 🌃`; break;
case 22: waktoonyabro = `Selamat Malam 🌃`; break; 
case 23: waktoonyabro = `Selamat Malam 🌃`; break;
}
module.exports.ucapanWaktu = waktoonyabro;

console.log(color(figlet.textSync('KirBotz', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
	}), 'magenta'))
console.log(bgcolor(`YT : KirBotz\n`,'blue'))
module.exports.time = moment.tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm')
module.exports.clock = moment.tz('Asia/Jakarta').format('HH:mm')
let d = new Date();
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
module.exports.weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
module.exports.week = d.toLocaleDateString(locale, { weekday: 'long' })
module.exports.calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

function countwaktu(seconds) {
if (typeof seconds !== "number") throw "Error: Unexpected Param "+ typeof seconds
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
module.exports.countwaktu = countwaktu

function pad(s) {
return (s < 10 ? '0': '') + s;
}
module.exports.pad = pad

function random(res) {
ult = res[Math.floor(Math.random() * res.length)]
return ult
}
module.exports.random = random

var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9 :%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9() :%_+.~#?&/=]*)/, 'gi'))
}
module.exports.isUrl = isUrl

var math = (teks) => {
return Math.floor(teks)
}
module.exports.math = math

exports.getGroupAdmins = function(participants){
    admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

module.exports.isNumber = x => typeof x === 'number' && !isNaN(x)
exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
             console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})

exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            console.log(text)
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})

exports.getBase64 = getBase64 = async (url) => {
    var response = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' } });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    var buffer = await response.buffer();
    var videoBase64 = `data:${response.headers.get('content-type')};base64,` + buffer.toString('base64');
    if (buffer)
        return videoBase64;
};

function nocache(module) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        akira.logger.info(`${module} updated`)
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
module.exports.uncache = uncache
module.exports.nocache = nocache
var more = String.fromCharCode(8206)
module.exports.readmore = more.repeat(4001)
let sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms*1000));
}
module.exports.sleep = sleep