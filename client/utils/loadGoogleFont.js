export const loadGoogleFont = (fontFamily) => {
  const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`;

  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = fontUrl;
    document.head.appendChild(link);
  }
};