module.exports = function(eleventyConfig) {
  ['src/css', 'src/images/', 'src/js/'].forEach(path =>
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
