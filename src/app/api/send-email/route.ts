import { MailData } from '@/app/types';
import { NextRequest, NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const res = NextResponse.json({ name: 'taro' });

  // リクエストボディをJSON形式で取得
  const json = await req.json();

  // メール送信内容設定（テキストエリア内の改行はすべて<br>に置換する）
  const mailData: MailData = {
    from: process.env.NEXT_PUBLIC_EMAIL_SENDER || '',
    to: json.to,
    subject: json.subject,
    html: json.html.replace(/\n/g, '<br>'),
  };

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
      await transporter.sendMail(mailData);
      alert('メールを送信しました。');
    } catch (error) {
      alert('メールの送信に失敗しました。');
    }
  };

  const transporter = createTransport(mailConfig);
  sendMail();

  return res;
}
