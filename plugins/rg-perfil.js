import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import fs from 'fs';
var handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://qu.ax/kgzBh.jpg')

//let { premium, level, cookies, exp, lastclaim, registered, regTime, age, role } = global.db.data.users[m.sender]

let { premium, level, description, estrellas, exp, lastclaim, registered, regTime, age, role } = global.db.data.users[m.sender];

age = age || 'Sin especificar';
description = description || 'Sin descripción';

let username = conn.getName(who)
let noprem = `
ˏˋ───･ ｡ﾟ☆: *.☽.* :☆ﾟ｡ ･───ˊˎ
ㅤㅤ *\`𝐏𝐄𝐑𝐅𝐈𝐋 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎\`*

👤 *Nombre:* ${username}
🏷️ *Tag:* @${who.replace(/@.+/, '')}
🍒 *Edad:* ${age}
💌 *Registrado:* ${registered ? '✅': '❌'}
🪪 *Premium:* ${premium ? '✅': '❌'}
📝 *Descripción:* ${description}


╭─• *\`𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒\`*
│ *🪙 Coins:* ${estrellas || 0}
│ *🍨 Nivel:* ${level || 0}
│ *🌷 Xp:* ${exp || 0}
│ *☕ Rango:* ${role}
╰─────────────•

> By Shadow Bot MD
`.trim()
let prem = `╭─⪩ 𓆩 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𓆪
│⧼👤⧽ *Usᴜᴀʀɪᴏ:* ${username}
│⧼💌⧽ *Rᴇɢɪsᴛʀᴀᴅᴏ:* ${registered ? '✅': '❌'}
│⧼🔱⧽ *Rᴏʟ:* Vip 👑
╰─────────────⪩

╭─⪩ 𓆩 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒 𓆪
│⧼🍪⧽ *Cᴏɪɴs:* ${estrellas}
│⧼🔰⧽ *Nɪᴠᴇʟ:* ${level}
│⧼💫⧽ *Xᴘ:* ${exp}
│⧼⚜️⧽ *Rᴀɴɢᴏ:* ${role}
╰─────────────⪩`.trim()
conn.sendFile(m.chat, pp, 'perfil.jpg', `${premium ? prem.trim() : noprem.trim()}`, m, rcanal, { mentions: [who] })
}
handler.help = ['profile']
handler.register = true
handler.group = false
handler.tags = ['rg']
handler.command = ['profile', 'perfil']
export default handler