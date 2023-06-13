'use client';

import { useState } from 'react';
import { SendContent } from './types';

export default function Home() {
  const [mailData, setMailData] = useState<SendContent>({
    to: 'ayato.kakizawa@emology.co.jp',
    subject: 'テストタイトル',
    text: 'テストテキスト<br>テストテキスト',
    html: 'テストHTML<br>テストHTML',
  });

  const sendMail = async () => {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mailData),
    });
    console.log('送信結果', res);
  };

  return (
    <div className="container mx-auto mt-12">
      <div>
        <label>送信先</label>
        <input type="text"></input>
      </div>
      <div>
        <label>タイトル</label>
        <input type="text"></input>
      </div>
      <div>
        <label>テキスト</label>
        <input type="text"></input>
      </div>
      <div>
        <label>HTML</label>
        <input type="text"></input>
      </div>
      <button onClick={sendMail}>メール送信</button>
    </div>
  );
}
