// src/pages/api/send-message.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Sadece POST isteklerine izin verilir.' });
    }
  
    const { name, email, phone, service } = req.body;
  
    const token = '8114179100:AAF6ZXhJRfDbBa1RE-Lb04fR25kwoRpzQX8';
    const chatId = '1270065195';
  
    const message = `
  📩 Yeni Form Başvurusu:
  👤 İsim: ${name}
  📧 Email: ${email}
  📞 Telefon: ${phone}
  🛠️ Hizmet: ${service}
  `;
  
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: message }),
        }
      );
  
      if (!response.ok) {
        throw new Error('Telegram mesajı gönderilemedi.');
      }
  
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  