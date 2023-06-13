import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const res = NextResponse.json({ name: 'taro' });
  const json = await req.json();

  console.log('json', json);

  // メール送信元設定
  const mailConfig = {
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_SENDER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  };

  const sendMail = async () => {
    try {
      await transporter.sendMail(json);
      alert('メールを送信しました。');
    } catch (error) {
      alert('メールの送信に失敗しました。');
    }
  };

  const transporter = createTransport(mailConfig);
  sendMail();

  res.cookies.set('trial', 'john');

  return res;
}
