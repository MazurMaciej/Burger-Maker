const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '475px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  laptopXL: '1700px',
  desktop: '2000px',
  desktopXL: '2560px'
};

export const device = {
  desktopXL: `(min-width: ${size.desktopXL})`,
  desktop: `(min-width: ${size.desktop})`,
  laptopXL: `(min-width: ${size.laptopXL})`,
  laptopL: `(min-width: ${size.laptopL})`,
  laptop: `(min-width: ${size.laptop})`,
  tablet: `(min-width: ${size.tablet})`,
  mobileL: `(max-width: ${size.mobileL})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileS: `(min-width: ${size.mobileS})`,
};