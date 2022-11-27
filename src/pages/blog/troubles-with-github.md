---
layout: ../../layouts/BlogLayout.astro
title: "Troubles with Github Pages"
description: "Today, I deployed an Astro site to Github Pages. Here's what happened."
published: Nov 26 2022
lastupdated: 1669532413165
id: "troubles-with-github"
outdated: false
---
I just want to get it straight, Astro is an amazing tool. It excels in many things and does what it is required to do. However, I just had a horrible experience with Astro and deployment with Github Actions and I would like to rant about it a bit.

# What went wrong?
When I finished my portfolio site, I decided to deploy it onto Github (as usual), but because Astro is not a site with only `.html` and `.css` files, I needed to use a build tool. In this case, Astro was so kind to give me Vite as the build tool (which btw was ***amazing***) and I wouldn't have to deal with build tool configurations. The real challenge began when the Github Actions build **FAILED**.

## The War Against Github Actions
When I pushed the first build of the site to Github, I used Astro's preconfigured [@withastro/action@v0](https://github.com/withastro/action) Action for Github deployment. It was all fine and dandy, **UNTIL I GOT THE MESSAGE** `Invalid YAML front matter in /github/workspace/src/layouts/BlogLayout.astro`. Now, this was a build error, meaning that the build failed and the entire action crashed. I didn't realize it yet, but now started the fight against Github Actions...

## Google Failure
When I first got that error, I did what any programmer would do and paste it into Google. Only problem, **ZERO RESULTS**. When I saw this, I'm not going to lie, I started **panicking**. "*all of this programming just for a build tool to fail???*" Each answer on StackOverflow either had no answers or someone was just dumb and forgot about some API documentation. For over an **hour**, I was fiddling around with my code, overriding the workflow files, changing the action, etc. etc. but to no avail.

## Conclusion
At the end of the day, I decided to use the same Astro action that started this whole chaos, and would you see the shock on your face when I saw **SUCCESS** on the screen.

**KEEP IN MIND, I LITERALLY CHANGED NOTHING ABOUT THE FILE** and it f&%!#$#! worked. I don't even know at this point man.

### Solution
I *think* this might've been the solution to my problem, in the code for the workflow to build the Astro project, 3 lines of code were commented out by the Astro team, `path`, `node-version`, and `package-manager`. Now, because I love **pnpm**, my project uses pnpm as the package manager, and maybe ***somewhere*** in the action it just fails the build step and instead throws an arbitrary YAML error instead. So, to fix this issue, I changed the workflow to this:

```yaml
name: Github Pages Astro CI

on:
  # Trigger the workflow every time you push to the `main` branch
  # Using a different branch name? Replace `main` with your branch’s name
  push:
    branches: [ master ]
  # Allows you to run this workflow manually from the Actions tab on GitHub.
  workflow_dispatch:
  
# Allow this job to clone the repo and create a page deployment
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v2          
      - name: Install, build, and upload your site
        uses: withastro/action@v0
        with:
            path: .
            node-version: 16
            package-manager: pnpm


  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```
