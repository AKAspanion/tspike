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
  laptop: `(max-width : ${size.laptop})`,
  desktop: `(max-width : ${size.desktop})`,
  largeScreen: `(max-width : ${size.largeScreen})`,
};
