---
title: "2022 Redesign"
description: "Recently, I redesigned nat3z.github.io from the ground up. This is what happened."
pubDate: 1669504698379
lastupdated: 1669504698379
id: "2022-redesign"
layout: ../../layouts/BlogLayout.astro
---

Today, I decided it was the annual (not really) redesign of my website, nat3z.github.io! If you didn't know, every year, or whenever I feel it, I redesign my personal website by giving it a bunch of cool new features and redesign the css from the ground up.
This time, instead of using just plain Javascript and CSS with no framework as the backbone, I decided to use Svelte and
Astro using SASS for the CSS! This post will talk about the troubles of using Astro, prior decisions before using Astro, and the design decisions for the website!

# Deciding the Framework

When deciding the framework, I initially alluded to the frameworks I am familiar with, [NextJS](https://nextjs.org/) and [SvelteKit](https://kit.svelte.dev). However, I realized something quickly, If I wanted to do blog posts with Markdown and have _blazingly_ fast performance, I needed something built with these systems in mind. Immediately, I remembered a framework from a [Fireship](https://www.youtube.com/watch?v=gxBkghlglTg) video that said that Astro is perfect for these types of apps! So I scratched what I have left of a failed first attempt using SvelteKit, and decided to switch the project to Astro. Currently, I believe that it was a great decision and I might use Astro for every update to this site even after this one!

# Troubles using Astro

## Cannot find any of modules: sass,node-sass
When I started using Astro, I decided to use Svelte (because of how fun it is to use) and SCSS for CSS postprocessing along with Typescript. The first of these problems occurred regarding SASS when using it for inline scoped css in my Svelte files. I kept on throwing this warning, saying `Cannot find any of modules: sass,node-sass`. At first, it was obvious! I just didn't have sass installed in `node_modules`, but I realized that the error didn't go away after adding the dependency.

For about 20 minutes, I was stumped. Why did it project this error out, but on the site the CSS applied perfectly fine? Then, after searching up the problem on Svelte's Github page, I saw that someone had this same issue but resolved it after setting up a `svelte.config.cjs` file and a `postcss.config.cjs` file. Initially, I didn't think that was the reason it gave out that error, because according to Astro, CSS preprocessors _just work_. However, after trying the solution, the error went away! In all, Astro and preprocessors work straight out of the box, but because of extension configurations in VSCode, an error will still be displayed unless you create configuration files for PostCSS and Svelte.

## CSS not applying to markdown

**Another** error that occurred was when I was building my blog. For _some reason_, CSS wasn't being applied to markdown elements from Svelte's scoped CSS system. I initially thought that it was a problem with my preprocessor, but after switching to vanilla CSS, nothing changed. After some research, I found out literally **nothing** about my problem and instead all the questions were regarding the Svelte extension for VSCode. *(kinda ironic isn't it?)* After a lot of tinkering with my code, I found out that styles applied when it was under a global scope (aka `globals.scss`). With this new knowledge, I decided to create a new SCSS file called `Blog.scss` and simply import it directly in the layout file. After that, it worked! Astro claims for CSS postprocessing working with one command are somewhat true, however there are many hurdles if you decide to use multiple frameworks/files for storing page content. In this case though, I believe that this was an issue with Svelte's scoped css system, however don't quote me on that.

**Other than those things, I had a pleasant experience using Astro!**

# Design Decisions

One of the first design decisions I decided on when building the site was copying the header from a completely different project. In my opinion, this header does everything correctly and is almost (in my opinion) the perfect rounded header design for easy navigation. As of this moment, I added a blog system and will eventually add more cool stuff in the near future.