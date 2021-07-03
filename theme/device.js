const size = {
  mobile: '375px',
  tablet: '768px',
  laptop: '960px',
  desktop: '2560px',
};

export default {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
