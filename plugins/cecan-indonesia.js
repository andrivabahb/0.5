import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
try {
	let url = `https://api.xyroinee.xyz/api/asupan/image/indonesia?apikey=${global.xyro}`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
	} catch (e) {
	m.reply(eror)
	}
}
handler.command = /^(indonesia)$/i
handler.tags = ['cecan']
handler.help = ['indonesia']
handler.premium = false
handler.limit = true
 
export default handler