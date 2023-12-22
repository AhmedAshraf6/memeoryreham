import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {}, []);
  return (
    <iframe
      src='https://onedrive.live.com/embed?resid=EEE248D072FB80E6%21706&amp;authkey=!AFMaOSrmFgVr8ME&amp;em=2&amp;wdAr=1.3333333333333333&amp;wdEaaCheck=1'
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
  );
}
