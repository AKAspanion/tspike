const size = {
  mobile: '520px',
  tablet: '768px',
  laptop: '960px',
  desktop: '1224px',
  largeScreen: '1824px',
};

export default {
  mobile: `(max-width : ${size.mobile})`,
  tablet: `(max-width : ${size.tablet})`,
  desktop: `(min-width : ${size.desktop})`,
  largeScreen: `(min-width : ${size.largeScreen})`,
};
