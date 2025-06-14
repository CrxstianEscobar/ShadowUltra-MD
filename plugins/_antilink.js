let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return conn.reply(m.chat, `*☕ Hey!! el \`antilink\` esta activo pero eres admin, ¡salvado!*`, m, rcanal, )
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}
await conn.reply(m.chat, `*☕ ¡Enlace detectado!*\n\n*${await this.getName(m.sender)} mandaste un enlace prohibido por lo cual seras eliminado*`, m, rcanal, )
if (!isBotAdmin) return conn.reply(m.chat, `*☕ No soy admin, no puedo eliminar intrusos*`, m, rcanal, )
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return conn.reply(m.chat, `*☕ Esta característica esta desactivada*`, m, rcanal, )
}
return !0

}
/*
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

// Función que detecta si el mensaje fue enviado por el propio bot
function isFromBot(m, conn) {
  return m.sender === conn.user.jid || (m.fromMe && m.isBaileys)
}

export async function before(m, { isAdmin, isBotAdmin }) {
  if (!m.isGroup) return !1
  if (isFromBot(m, this)) return !0 // Ignorar mensajes del bot

  let chat = global.db.data.chats[m.chat]
  let delet = m.key.participant
  let bang = m.key.id
  let bot = global.db.data.settings[this.user.jid] || {}
  const isGroupLink = linkRegex.exec(m.text)
  const grupo = `https://chat.whatsapp.com`

  if (isAdmin && chat.antiLink && m.text.includes(grupo)) {
    return this.reply(m.chat, `*☕ Hey!! el \`antilink\` está activo pero eres admin, ¡salvado!*`, m, rcanal)
  }

  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
      if (m.text.includes(linkThisGroup)) return !0
    }

    await this.reply(m.chat, `*☕ ¡Enlace detectado!*\n\n*${await this.getName(m.sender)} mandaste un enlace prohibido por lo cual serás eliminado*`, m, rcanal)

    if (!isBotAdmin) return this.reply(m.chat, `*☕ No soy admin, no puedo eliminar intrusos*`, m, rcanal)

    if (isBotAdmin) {
      await this.sendMessage(m.chat, {
        delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }
      })
      await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    } else if (!bot.restrict) {
      return this.reply(m.chat, `*☕ Esta característica está desactivada*`, m, rcanal)
    }
  }

  return !0
}*/