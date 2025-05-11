// app/api/sendMessage/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, phone, organization } = await request.json();

  const TOKEN = process.env.TELEGRAM_BOT_TOKEN! || '7939750675:AAGWpxDO0eZTODMjpdJj_QPQ0_JSObGvFrg';
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID! || '6157181272';

  const message = `
📥 Yangi kontakt forma:
👤 Ism: ${name}
📧 Email: ${email}
📞 Telefon: ${phone}
🏢 Tashkilot: ${organization || '—'}
  `;

  const telegramURL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const res = await fetch(telegramURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
