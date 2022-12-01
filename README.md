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
    <li>Non-minified HTML, JS and CSS for simpler debugging</li>
</ol>

### Production

The production code is built using `npm run build`. It bundles the source code into production code with the below modifications: 

<ol>
    <li>File names include hashes for cache busting</li>
    <li>HTML, JS and CSS is minified for optimization</li>
</ol>

## Learning Points

The purpose of this section is to note a few of the things I learned in order to complete this project successfully. This project was particularly challenging as I had to learn lots of new concepts and tools, and this process took me weeks of reading and many days of failed attempts. Despite this, I somehow overcame my challenges, so I wanted to talk about them a bit.

### What is a Favicon?

I learned about Favicons pretty early. As I was building the project, I couldn't help but notice that Google Chrome was throwing a 404 error about a missing favicon. After doing some research, I found out that it is pretty encouraged for a web project to include a Favicon. Browsers use this for a number of purposes, including the icon that appears in the tab beside the name. I found this amazing tool called [Favicon Generator](https://favicon.io/favicon-generator/) that is not only completely free to use, but also intuitive, and full of options. 

### What is Webpack?

Webpack, loved and hated by many. This tool was the biggest source of my headaches early on. There is so much to learn about this tool, but once you understand it, you get the feel for how helpful it can be in the development cycle. I had to learn not only how to configure it, but how to create multiple environments (development and production). I learned about how to hash file and asset names for production for the purpose of cache busting, and how to keep everything non-minified/uglified during development, which along with sourcemaps, made it a breeze to troubleshoot bugs.

Despite this, I spent the first days experiencing bug after bug before I even got to the development cycle. At first it seemed unending, and many of my questions on forums never received an answer. I was pretty much on my own, but after eliminating one bug after the next, I eventually reached a point where... it just worked. I feel a lot more confident with Webpack now, although it is no secret that I still have a ton to learn about it.

### Sass has Syntax?

I have used SASS for the last few projects I worked on. After experiencing the headache that is raw CSS, especially in projects that used SASS libraries like Bootstrap, I vowed to never go back (unless my future boss ordered me to lol). So I got to work, and quickly realized I need a SASS compiler like [Koala App](http://koala-app.com/) to turn the SASS into CSS the website can understand. Well, in this project, I found out that I have been using SASS wrong. Sure, it was working, but I was using CSS in a lot of cases where SASS has built in functions, or its own way of doing things. For example, I was using clunky CSS variables when I could have used the simpler and easier to understand SASS variables.

Another thing I discovered is that Koala App was a deprecated tool despite how well it has served me. Well, thankfully, there was a solution for that! The Webpack tool I discovered earlier had a loader for SASS, and you can chain it with a few other loaders to turn your SASS into bundled CSS. Really cool!