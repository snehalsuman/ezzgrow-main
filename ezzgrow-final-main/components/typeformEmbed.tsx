import React, { useEffect } from 'react';

const TypeformEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div data-tf-live="01HTAKKGHY0WAZKFF86HKYP7GF"></div>;
};

export default TypeformEmbed;
