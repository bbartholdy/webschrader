module.exports = function (eleventyConfig) {
  // Folders to copy to output folder
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("assets");
};