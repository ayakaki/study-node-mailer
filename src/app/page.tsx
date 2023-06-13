'use client';

import { useState } from 'react';
import { SendContent } from './types';

export default function Home() {
  const [mailData, setMailData] = useState<SendContent>({
    to: '',
    subject: '',
    text: '',
    html: '',
  });

  const sendMail = async () => {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mailData),
    });
    console.log('送信結果', res);
  };

  // 送信先設定処理
  const setTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailData({ ...mailData, to: e.target.value });
  };

  const setSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailData({ ...mailData, subject: e.target.value });
  };

  const setText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailData({ ...mailData, text: e.target.value });
  };

  const setHtml = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailData({ ...mailData, html: e.target.value });
  };

  return (
    <div className="container mx-auto mt-12">
      <div className="mb-4">
        <label>
          <p>送信先</p>
          <input type="text" className="text-black" onChange={setTo}></input>
        </label>
      </div>
      <div className="mb-4">
        <label>
          <p>題名</p>
          <input
            type="text"
            className="text-black"
            onChange={setSubject}
          ></input>
        </label>
      </div>
      <div className="mb-4">
        <label>
          <p>テキスト</p>
          <input type="text" className="text-black" onChange={setText}></input>
        </label>
      </div>
      <div className="mb-4">
        <label>
          <p>HTML</p>
          <input type="text" className="text-black" onChange={setHtml}></input>
        </label>
      </div>
      <button onClick={sendMail}>メール送信</button>
    </div>
  );
}
