const handler = async (m, { conn }) => {
const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];

  conn.sendMessage(m.chat, {
text: `🍒 ¡Bienvenido! ${taguser}\n\n¿Quieres dominar WhatsApp con el bot más poderoso? ¡Shadow está aquí!\nPersonaliza tu experiencia de WhatsApp como nunca antes.\n\n*`PRECIOS DEL BOT`*\n\n\`\`\`PERMAMENTE\`\`\`\n> *ᴜɴ ɢʀᴜᴘᴏ:*\n𝟦 🇵🇪/𝟣𝟥𝟢𝟢 🇦🇷\n> *ᴛʀᴇs ɢʀᴜᴘᴏs:*\n𝟪 🇵🇪/𝟤𝟨𝟢𝟢 🇦🇷\n> *sᴇɪs ɢʀᴜᴘᴏs:*\n𝟣𝟧 🇵🇪/𝟧𝟢𝟢𝟢 🇦🇷\n\n\`\`\`MENSUAL\`\`\`\n𝟤 🇵🇪/𝟫𝟢𝟢 🇦🇷\n\n\`\`\`PERSONALIZADO\`\`\`\n𝟥𝟢 🇵🇪/𝟫𝟧𝟢𝟢 🇦🇷\n\n\`\`\`PRUEBA & COMPRA\`\`\`\nhttps://chat.whatsapp.com/CwpXWm25KZX6HxUxcSmwvN\n\n> © Տһᥲძᨣᥕ Ɓᨣƚ Uᥣ𝗍rᥲ`,
mentions: [m.sender]
}, { quoted: fkontak });
};
handler.command = ['precios', 'comprar', 'adquirir'];
export default handler;