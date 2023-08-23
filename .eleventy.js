module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/styles/style.css");
    eleventyConfig.addPassthroughCopy("./src/styles/variables.css");
    eleventyConfig.addPassthroughCopy("./src/styles/pages.css");
    eleventyConfig.addPassthroughCopy("./src/styles/normalize/normalize.css");
    eleventyConfig.addPassthroughCopy("./src/styles/normalize/the-new-css-reset.css");
    eleventyConfig.addPassthroughCopy("./src/assets/audio/skateboard.mp3");
    
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};