import fetch from 'node-fetch'
import { Sticker } from 'wa-sticker-formatter'

let handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `*${xsticker} Por favor, proporciona un texto para buscar stickers en la API*\n> *\`Ejemplo:\`* ${usedPrefix + command} Gatitos`, m, rcanal)

  try {
    const searchRes = await fetch(`https://zenzxz.dpdns.org/search/stickerlysearch?query=${encodeURIComponent(text)}`)
    const searchJson = await searchRes.json()

    if (!searchJson.status || !Array.isArray(searchJson.data) || searchJson.data.length === 0) {
      return m.reply('*⚠️ No hay ningún esticker con ese nombre.*')
    }

    const pick = searchJson.data[Math.floor(Math.random() * searchJson.data.length)]

    const detailUrl = `https://zenzxz.dpdns.org/tools/stickerlydetail?url=${encodeURIComponent(pick.url)}`
    const detailRes = await fetch(detailUrl)
    const detailJson = await detailRes.json()

    if (!detailJson.status || !detailJson.data || !Array.isArray(detailJson.data.stickers) || detailJson.data.stickers.length === 0) {
      return m.reply('*✖️ Error al tomar los stickers*')
    }

    const packName = detailJson.data.name
    const authorName = detailJson.data.author?.name || 'unknown'

    m.reply(`*🐈 Enviando \`${detailJson.data.stickers.length}\` stickers.*`)

    let maxSend = 10
    for (let i = 0; i < Math.min(detailJson.data.stickers.length, maxSend); i++) {
      const img = detailJson.data.stickers[i]
      let sticker = new Sticker(img.imageUrl, {
        pack: wm,
        author: '',
        type: 'full',
        categories: ['😏'],
        id: 'zenzxd'
      })
      let buffer = await sticker.toBuffer()
      await conn.sendMessage(m.chat, { sticker: buffer }, { quoted: m })
    }

  } catch (e) {
    console.error(e)
    m.reply('Error al procesar los stickers')
  }
}

handler.help = ['stickerly']
handler.tags = ['sticker']
handler.command = /^(stikerly|stickerly|sly)$/i
export default handler