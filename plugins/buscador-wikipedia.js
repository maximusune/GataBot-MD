import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
async function wikipedia(querry) {
try {
const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}πππΎπππ½πΌ ππΌ ππΌππΌπ½ππΌ πΎππΌππ ππΌππΌ π½πππΎπΌπ\nπππππππ\n*${usedPrefix + command} Luna*\n\nππππ πππ πππππππΏ ππ πππΌππΎπ\nπππΌππππ\n*${usedPrefix + command} Universe*`
wikipedia(`${text}`).then(res => {
let info = `πππΎπππππ ππππ | π πππππΏ ππππ:\n\n` + res.result.isi
conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ π½πͺπ¨π¦πͺππππ¨ | ππππ§ππππ¨ π', '#buscarmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)   
  
}).catch(() => { m.reply(`${fg}ππ ππ πππΎπππππ ππ πππ π½πππΎπΌ. ππππΎπππ πππΌπ πππΌ ππΌππΌπ½ππΌ πΎππΌππ\n\nπππ πππππΏ πππΌπ πππ πΌππ πππππππ πππ. πππ ππ πππ πΌ πππ ππππΏ`) })}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = [ 'internet']
handler.command = /^(wiki|wikipedia)$/i 
handler.exp = 40
handler.level = 2
export default handler
