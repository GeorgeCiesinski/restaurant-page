# restaurant-page
Website for Restaurant

## Getting Started

<ol>
    <li>
    Clone the repo
    </li>
    <li>
    TBD
    </li>
</ol>

## Features

## Webpack

This project was built using webpack. I learned a lot about this tool, and was even able to replace deprecated tools like Koala app. I used multiple webpack config files, and [webpack-merge](https://www.npmjs.com/package/webpack-merge) to combine them depending on whether I want a development or production environment. 

### Development

The development environment is started as a dev server using `npm start` or in Watch Mode using `npm run watch`. In this environment, I am using: 

<ol>
    <li>Source Maps</li>
    <li>File names without hash</li>
    <li>Non-minified HTML, JS and CSS</li>
</ol>

### Production

The production code is built using `npm run build`. It bundles the source code into production code with the below modifications: 

<ol>
    <li>File names include hashes for cache busting</li>
    <li>HTMl, JS and CSS is minified for optimization</li>
</ol>