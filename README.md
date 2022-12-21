# restaurant-page

Mock Website for Fictional Restaurant

## Objective

The objective of this project was to improve my understanding of webpack and the revealing module pattern.

## Getting Started

<ol>
    <li>
        Clone the repo into a local directory:
<pre>
<code>
cd (your-directory)
git clone git@github.com:GeorgeCiesinski/restaurant-page.git
</code>
</pre>
    </li>
    <li>
        CD into the directory and install the required dependencies: 
<pre>
<code>
cd restaurant-page
npm install
</code>
</pre>
    </li>
    <li>
        You have a few choices to run the site:
        <ol style="list-style-type: lower-alpha;">
            <li>
                Run Dev Server: This bundles assets and source files in memory and automatically opens the page in your default browser.
<pre>
<code>
npm start
</code>
</pre>
            </li>
            <li>
            Watch Source Files: This watches your source files for changes and bundles assets and source files into the dist folder. You need to find and open the page in <code>dist</code> and manually refresh.
<pre>
<code>
npm run --watch
</code>
</pre>
            </li>
            <li>
                Build Site: This bundles assets and source files into <code>dist</code>, and renames them with hashes in the name for production.
<pre>
<code>
npm run build
</code>
</pre>
            </li>
        </ol>
    </li>
</ol>

## Features

### Dynamic Menu

The menu is dynamically constructed from a menu object located in `src/data/menu.json`. You can edit this file to add your own courses and course items following the below format:

    {
        "menu": [
            {
                "course": "Course name (e.g. breakfast)", 
                "items": [
                    {
                        "name": "Eggs and Bacon",
                        "description": "An American delicasy made of eggs and bacon",
                        "price": "$100"
                    },
                    {
                        "name": "Toast",
                        "description": "Delicious pan seared bread",
                        "price": "$80"
                    }
                ]
            },
            {
                "course": "Another course (e.g. brunch)",
                "items": [
                    ...
                ]
            }
        ]
    }

### Responsive Design

The website should work on a variety of screen sizes. 

### Tab Based Navigation

Rather than linking to other pages, the nav buttons generate content and inject it into the page. 

## Built with Webpack

This project was built using webpack. I learned a lot about this tool, and was even able to replace deprecated tools like Koala app. I used multiple webpack config files, and [webpack-merge](https://www.npmjs.com/package/webpack-merge) to combine them depending on whether I want a development or production environment. 

### Development

The development environment is started as a dev server using `npm start` or in Watch Mode using `npm run watch`. In this environment, I am using: 

<ol>
    <li>Source Maps</li>
    <li>File names are unhashed</li>
    <li>Non-minified HTML, JS and CSS for simpler debugging</li>
</ol>

### Production

The production code is built using `npm run build`. It bundles the source code into production code with the below modifications: 

<ol>
    <li>File names include hashes for cache busting</li>
    <li>HTML, JS and CSS is minified for optimization</li>
</ol>

## Learning Points

The purpose of this section is to note a few of the things I learned in order to complete this project successfully. This project was particularly challenging as I had to learn lots of new concepts and tools, and this process took me weeks of reading and many days of failed attempts. 

### What is a Favicon?

I learned about Favicons pretty early. As I was building the project, I couldn't help but notice that Google Chrome was throwing a 404 error about a missing favicon. After doing some research, I found out that it is pretty encouraged for a web project to include a Favicon. Browsers use this for a number of purposes, including the icon that appears in the tab beside the name. I found this amazing tool called [Favicon Generator](https://favicon.io/favicon-generator/) that is not only completely free to use, but also intuitive, and full of options. 

### What is Webpack?

Webpack, loved and hated by many. This tool was the biggest source of my headaches early on. There is so much to learn about this tool, but once you understand it, you get the feel for how helpful it can be in the development cycle. I had to learn not only how to configure it, but how to create multiple environments (development and production). I learned about how to hash file and asset names for production for the purpose of cache busting, and how to keep everything non-minified/uglified during development, which along with sourcemaps, made it a breeze to troubleshoot bugs.

Despite this, I spent the first days experiencing bug after bug before I even got to the development cycle. At first it seemed unending, and many of my questions on forums never received an answer. I was pretty much on my own, but after eliminating one bug after the next, I eventually reached a point where... it just worked. I feel a lot more confident with Webpack now, although it is no secret that I still have a ton to learn about it.

### Sass has Syntax?

I have used SASS for the last few projects I worked on. After experiencing the headache that is raw CSS, especially in projects that used SASS libraries like Bootstrap, I vowed to never go back (unless my future boss ordered me to lol). So I got to work, and quickly realized I need a SASS compiler like [Koala App](http://koala-app.com/) to turn the SASS into CSS the website can understand. Well, in this project, I found out that I have been using SASS wrong. Sure, it was working, but I was using CSS in a lot of cases where SASS has built in functions, or its own way of doing things. For example, I was using clunky CSS variables when I could have used the simpler and easier to understand SASS variables.

Another thing I discovered is that Koala App was a deprecated tool despite how well it has served me. Well, thankfully, there was a solution for that! The Webpack tool I discovered earlier had a loader for SASS, and you can chain it with a few other loaders to turn your SASS into bundled CSS. Really cool!

# Credits

French Cuisine photo by <a href="https://unsplash.com/es/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jay Wennington</a> on <a href="https://unsplash.com/s/photos/french-cuisine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
Background photo by <a href="https://unsplash.com/@peterlaster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pedro Lastra</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Cursif Font by <a href="https://www.fontspace.com/christophe-beaumale">Christophe Beaumale</a> on <a href="https://www.fontspace.com">Font Space</a>
