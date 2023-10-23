const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownTOC = require('markdown-it-toc-done-right');


module.exports = function (eleventyConfig) {

    eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItAnchor, { permalink: true, permalinkBefore: true, permalinkSymbol: '§' }).use(markdownTOC));
    eleventyConfig.addPassthroughCopy("./src/styles/style.css");
    eleventyConfig.addPassthroughCopy("./src/styles/variables.css");
    eleventyConfig.addPassthroughCopy("./src/styles/pages.css");
    eleventyConfig.addPassthroughCopy("./src/styles/normalize/normalize.css");
    eleventyConfig.addPassthroughCopy("./src/styles/normalize/the-new-css-reset.css");
    eleventyConfig.addPassthroughCopy("./src/assets/audio");
    eleventyConfig.addPassthroughCopy("./src/assets/img");
    eleventyConfig.addPassthroughCopy("./src/android-chrome-192x192.png");
    eleventyConfig.addPassthroughCopy("./src/android-chrome-256x256.png");
    eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png");
    eleventyConfig.addPassthroughCopy("./src/browserconfig.xml");
    eleventyConfig.addPassthroughCopy("./src/favicon-16x16.png");
    eleventyConfig.addPassthroughCopy("./src/favicon-32x32.png");
    eleventyConfig.addPassthroughCopy("./src/favicon.ico");
    eleventyConfig.addPassthroughCopy("./src/mstile-150x150.png");
    eleventyConfig.addPassthroughCopy("./src/safari-pinned-tab.svg");
    eleventyConfig.addPassthroughCopy("./src/site.webmanifest");
    eleventyConfig.addPassthroughCopy("./src/build");
    eleventyConfig.addPassthroughCopy("./src/button-icons");
    eleventyConfig.addPassthroughCopy("./src/translations");

    
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};