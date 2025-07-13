const handler = async (m, { conn }) => {
  let who;

  if (m.quoted && m.quoted.sender) {
    who = m.quoted.sender;
  } else if (m.mentionedJid && m.mentionedJid[0]) {
    who = m.mentionedJid[0];
  } else {
    who = m.fromMe ? conn.user.jid : m.sender;
  }

  const avatarUrl = await conn.profilePictureUrl(who, 'image')
    .catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');

  const apiUrl = `https://some-random-api.com/canvas/gay?avatar=${encodeURIComponent(avatarUrl)}`;

  await conn.sendFile(m.chat, apiUrl, 'gay.png', '*🏳️‍🌈 Miren a este gay 🏳️‍🌈*', m);
};

handler.help = ['profilegay'];
handler.tags = ['marker'];
handler.command = /^(gay2|gayp|pfpgay|profilegay)$/i;
handler.group = true;

export default handler;
