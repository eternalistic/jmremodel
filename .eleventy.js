module.exports = function(eleventyConfig) {
	eleventyConfig.addGlobalData('currentYear', '2024');
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
