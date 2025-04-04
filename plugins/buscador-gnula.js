import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`*🔍 Ingrese el nombre de una pelicula*\n> *\`Ejemplo\`*\n> ${usedPrefix + command} Venom 3 The last Dance`)

try {
let api = await fetch(`https://delirius-apiofc.vercel.app/search/cuevana?q=${encodeURIComponent(text)}`)
let json = await api.json()

let JT = `📽️ ${command}  -  Search 📽️`;
json.data.forEach((app, index) => {
      JT += `\n\n═══════════════`;
      JT += `\n☁️ *Nro :* ${index + 1}`
      JT += `\n🖼️ *Imagen:* ${app.image}`
      JT += `\n⚜️ *Titulo:* ${app.title}`
      JT += `\n📚 *Descripcion:* ${app.description}`
      JT += `\n🔗 *Link:* ${app.link}`
}) 

m.reply(JT)
} catch (error) {
console.error(error)
}}

handler.help = ['cuevana'];
handler.tag = ['buscador'];
handler.command = /^(cuevana|cuevanasearch|gnula)$/i

export default handler