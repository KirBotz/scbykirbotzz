const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const { color, bgcolor } = require('../V2/color')
const { getGroupAdmins, getBuffer } = require('../V2/functions')

module.exports = welcome = async (Akira, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./V3/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    groupMet = await Akira.groupMetadata(anu.jid)
                groupMembers = groupMet.participants
                groupAdmins = getGroupAdmins(groupMembers)
			    mem = anu.participants[0]
			    console.log(anu)
                try {
               pic = await Akira.getProfilePicture(mem)
                } catch (e) {
                pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
                pp_grup = await Akira.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
             }
            if (anu.action == 'add' && mem.includes(Akira.user.jid)) {
            Akira.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot, Tolong Jadikan Admin Ya, Ketik .menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(Akira.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await Akira.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
               groupName = mdata.subject
                let v = Akira.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
              teks = `𝙃𝘼𝙇𝙇𝙊 𝙆𝘼𝙆 *@${mem.split('@')[0]}*
*𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙂𝙍𝙐𝙋 ${groupName}*
*𝙅𝘼𝙉𝙂𝘼𝙉 𝙇𝙐𝙋𝘼 𝙄𝙉𝙏𝙍𝙊*
*⊛ ɴᴀᴍᴀ :*
*⊛ ᴜᴍᴜʀ :*
*⊛ ʜᴏʙʙʏ :*
*⊛ ɢᴇɴᴅᴇʀ :*
*⊛ ᴀꜱᴀʟ ᴋᴏᴛᴀ :*
*⊛ ɴᴏᴍᴏʀ :* ${mem.replace('@s.whatsapp.net', '')}
*𝘿𝙄 𝙂𝙍𝙐𝙋 𝙄𝙉𝙄~~*`
              buff = await getBuffer(pic)
               Akira.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `*𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ*`, buttons: [{buttonId: `.selamatdatang`,buttonText:{displayText: 'WELCOME KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		}
            if (anu.action == 'remove' && !mem.includes(Akira.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await Akira.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = Akira.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `𝙎𝙀𝙇𝘼𝙈𝘼𝙏 𝙏𝙄𝙉𝙂𝙂𝘼𝙇\n  @${num.split('@')[0]}\n𝙅𝘼𝙉𝙂𝘼𝙉 𝘽𝘼𝙇𝙄𝙆 𝙇𝘼𝙂𝙄 𝙔𝘼𝙆`
               buff = await getBuffer(pic)
               Akira.sendMessage(mdata.id, { contentText: `${out}`, footerText: `*𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ*`, buttons: [{buttonId: `.bay`,buttonText:{displayText: 'BYE KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'pink'))
		}
	}
