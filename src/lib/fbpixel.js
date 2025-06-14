// lib/fbpixel.js
export const FB_PIXEL_ID = '496198570232035'; // Replace with your actual ID

export const pageview = () => {
  window.fbq('track', 'PageView');
};

export const event = (name, options = {}) => {
  window.fbq('trackCustom', name, options);
};
