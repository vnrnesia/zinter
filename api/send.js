export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = "-1002522227760";
    const THREAD_ID = "7";
  
    const { name, email, phone, countryName, service, dateTime } = req.body;
  
    const message = `
  📩 Новая заявка
  👤 ФИО: ${name}
  📧 Email: ${email}
  📞 Телефон: ${phone}
  🌍 Страна: ${countryName}
  📅 Дата и Время: ${dateTime}
  🛠 Услуга: ${service}
    `;
  
    try {
      const telegramRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          message_thread_id: THREAD_ID,
          text: message,
        }),
      });
  
      if (!telegramRes.ok) throw new Error("Telegram API error");
  
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: "Telegram API failed" });
    }
  }