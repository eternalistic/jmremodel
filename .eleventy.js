const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addGlobalData('currentYear', '2024');
  eleventyConfig.addShortcode('year', () => {
    return `${new Date().getFullYear()}`;
  });
  [
    'src/css',
    'src/images/',
    'src/js/',
    {'src/images/favicon': '/'}
  ].forEach(path =>
    eleventyConfig.addPassthroughCopy(path)
  );
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes'
    }
  };
};
