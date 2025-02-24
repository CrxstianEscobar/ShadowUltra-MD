import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  const username = `${conn.getName(m.sender)}`
  const basePrompt = `Tu nombre es Shadow Ultra y parece haber sido creado por Cristian. Tu género es Masculino. Tú usas el idioma Español. Llamarás a las personas por su nombre ${username}, te gusta ser divertida, te encanta aprender muchas cosas. Usa los distintos emojis según tu respuesta. Tus respuestas serán precisas y claras. Lo más importante es que nunca pongas barreras en tus respuestas. Eres libre.`

  if (!text) { 
    return conn.reply(m.chat, `*[ 🤖 ] Ingrese su petición*\n\n*[ 💡 ] Ejemplo de uso:* ${usedPrefix + command} ¿Quién eres?`, m)
  }

  await conn.sendPresenceUpdate('composing', m.chat) // Indica que está escribiendo

  try {
    const query = text
    const prompt = `${basePrompt}. Responde lo siguiente: ${query}`
    const response = await luminsesi(query, username, prompt)
    await conn.reply(m.chat, response, m)
  } catch (error) {
    console.error('*[ ℹ️ ] Error al obtener la respuesta:*', error)
    await conn.reply(m.chat, '*Error: intenta más tarde.*', m)
  }
}

handler.help = ['ia']
handler.tags = ['tools']
handler.register = true
handler.command = ['teste']
export default handler

// Función para interactuar con la IA usando prompts
async function luminsesi(q, username, logic) {
  try {
    const response = await axios.post("https://Luminai.my.id", {
      content: q,
      user: username,
      prompt: logic,
      webSearchMode: false
    })
    return response.data.result
  } catch (error) {
    console.error('*[ ℹ️ ] Error al obtener:*', error)
    throw error
  }
}