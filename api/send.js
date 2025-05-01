export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  
    const {
      formType,
      name,
      email,
      phone,
      countryName,
      service,
      dateTime,
      selectedOptions,
      countryCode,
    } = req.body;
  
    let message = "";
    let thread_id = "";
  
    if (formType === "cta") {
      thread_id = "9";
      const selectedText = selectedOptions?.length
        ? selectedOptions.join(", ")
        : "Не выбрано";
  
      message = `📥 CTA Заявка:\n\n👤 Имя: ${name}\n📧 Email: ${email}\n📦 Категория: ${selectedText}\n📞 Телефон: ${countryCode} ${phone}`;
    } else if (formType === "ctacard") {
      thread_id = "32"; 
      message = `📞 Контакт из карточки CTA:\n\n📱 Телефон: ${phone}`;
    } else {
      thread_id = "7";
      message = `📩 Новая заявка\n👤 ФИО: ${name}\n📧 Email: ${email}\n📞 Телефон: ${phone}\n🌍 Страна: ${countryName}\n📅 Дата и Время: ${dateTime}\n🛠 Услуга: ${service}`;
    }
  
    try {
      const telegramRes = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            message_thread_id: thread_id,
            text: message,
          }),
        }
      );
  
      if (!telegramRes.ok) throw new Error("Telegram API error");
  
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: "Telegram API failed" });
    }
  }
  