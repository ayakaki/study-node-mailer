'use client';

import { useState } from 'react';
import { SendContent } from './types';

export default function Home() {
  const [mailData, setMailData] = useState<SendContent>({
    to: '',
    subject: '',
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

  const setTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailData({ ...mailData, to: e.target.value });
  };

  const setSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailData({ ...mailData, subject: e.target.value });
  };

  // textarea は onChange で取得する
  const setHtml = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
          <p>HTML</p>
          <textarea className="text-black" onChange={setHtml}></textarea>
        </label>
      </div>
      <button onClick={sendMail}>メール送信</button>
    </div>
  );
}
