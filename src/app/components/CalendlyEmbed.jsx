'use client'
import { useEffect } from 'react';
import css from './Footer/Footer.module.css';

const CalendlyEmbed = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute(
      'href',
      'https://assets.calendly.com/assets/external/widget.css'
    );
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(style);
    head.appendChild(script);
  }, []);

  return (
    <button
      className={css.button}
      onClick={() => {
        Calendly.initPopupWidget({
          url: url,
        });
        return false;
      }}
    >
      <span className={css.buttonText}>Schedule time with me</span>
    </button>
  );
};

export default CalendlyEmbed;
