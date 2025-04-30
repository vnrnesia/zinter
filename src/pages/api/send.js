// /pages/api/send.js

export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const { name, email, phone, service } = req.body;
  
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  
    const message = `
  📩 Yeni Başvuru
  👤 İsim: ${name}
  📧 Email: ${email}
  📞 Telefon: ${phone}
  🛠 Hizmet: ${service}
  `;
  
    try {
      const telegramRes = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
          }),
        }
      );
  
      if (!telegramRes.ok) throw new Error("Telegram API hatası");
  
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: "Mesaj gönderilemedi" });
    }
  }
  