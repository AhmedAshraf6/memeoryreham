import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {}, []);
  return (
    <>
      <iframe
        src='https://onedrive.live.com/embed?resid=EEE248D072FB80E6%21710&amp;authkey=!AAN6RfZlmQsLHoE&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1'
        frameborder='0'
        style={{ width: '100vw', height: '90vh' }}
      >
        This is an embedded{' '}
        <a target='_blank' href='https://office.com'>
          Microsoft Office
        </a>{' '}
        presentation, powered by{' '}
        <a target='_blank' href='https://office.com/webapps'>
          Office
        </a>
        .
      </iframe>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href='./a.ppsx' download={true}>
          تحميل الملف
        </a>
      </div>
    </>
  );
}
