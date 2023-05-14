---
layout: ../../layouts/BlogLayout.astro
title: "Creating a Schedule Site"
description: "Schedule management can be hard, so I did something about it."
published: May 13 2023
lastupdated: Sat May 13 2022 20:22:00
id: "creating-a-schedule-site"
tags: [ "Devlog" ]
outdated: false
---
This is a "brief" overview of what I did to develop and release [DynSchedule](https://schedule.nat3z.com/), an open-source dynamic scheduling solution for Salesian.

# The Mission
DynSchedule's only mission was to create a dynamic schedule API and client that reads from Salesian's schedule and output the dates in a countdown-like format.

Although the API is *far* from perfect, I believe that it has gotten to the point where I can comfortably keep it running and do its thing, with the occasional tweaking of the codebase in order to make it work.

# Developing the API
The first step in creating a dynamic schedule is to create the API for it, the backbone of it all! The API was originally created using Express, however I later realized that switching to Vercel Edge Functions would be the better move for the long term. In the backend, it uses **momentjs** (even though it's legacy), **ics**, **node-ical**, **axios**, and **TypeScript**.

When you ping the schedule endpoint, the API first fetches the Salesian Calendar RSS feed, which allows for an easier parsing of the schedule. Then, it filters out all events in the calendar that aren't tagged as "VEVENT" (which is essentially a schedule change). After that, it tries to find an event in the calendar that matches the date you requested from the API. Once it finds the date, it checks if it matches one of the **six** regex patterns, and if so, uses that as the date. If it failed to find a schedule change (e.g. it's a regular school day), the API rollbacks to the normal schedule (which is hardcoded into the API). Then, a bunch of coding magic happens where it uses the regex that matches the string and parses the string to find the Block (or special event) and the time frame it lasts.

An example of a valid string is the following:
![(An image showing a regex pattern matching a string)](../timeframe.jpg)

Finally, it sorts everything by the start time, and sends it to the API!

## The weakpoints
The main weakpoint of this API is the regex pattern, and this really cannot be fixed (unless AI is integrated instead of regex patterns). If there is a bug, I have to manually change the regex pattern in order to account for the mishap, making this a lot more tedious to maintain instead of using a hard-coded system. However, as long as the person logging the schedule changes is keeping it consistent, the API will work ~99% of the time! Along with that, the more errors there are, more bug fixing happens and as a result, the API becomes better!

# Developing the Client
Creating a client was the easy part for this project. I decided to use Astro because it provided great performance and an excellent developer experience, allowing me to stick close to the DOM while also giving me the opportunity to use Tailwind and also node packages easily. In the client, as of this blog post, there is 3 main features:

- The countdown timer (aka the actual schedule)
- Period aliases
- Theme Changer + Theme Editor

The feature that I have sunken the most time into is definitely the Theme Editor, as it needed to be easy to use, as well as giving advanced users the ability to make big changes to the stylesheet of the site.

> Did you know that each of the prebuilt themes are made with the theme editor? Don't believe me? Check them out in the editor menu!

Aside from that, everything else makes use of the DynSchedule API.

# API Documentation
If you decide that you want to use the API for your own project, simply use the url:
[https://api.schedule.nat3z.com/api/schedule](https://api.schedule.nat3z.com/api/schedule)
and use the fairly easy to understand JSON to grab the start and end times of the periods.

# The Future
DynSchedule, in no way, will be going away. I love what I've done with DynSchedule, and I hope that you can appreciate my work!

Thanks for reading this pretty long blog post, and I hope you the best with your high school career!

-Nat3z 💖