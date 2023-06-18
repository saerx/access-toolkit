module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("media");
    
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};