# Example Tumblr Grid Layout

This repository provides a template and tutorial for building grid layouts for tumblr themes using Masonry, imagesLoaded, Infinite Scroll and Photoset Grid.

The template is open source, feel free to use as you wish!

You can find an implementation of this template at: https://examplegridtheme.tumblr.com/

## The Issue
The standard Masonry + imagesLoaded implementation doesn't play nice with tumblr's photoset post type. By default, photosets are iframes of varying layouts, and while imagesLoaded fixes issues with loading images throwing off our layouts, it can't help us with the images inside these iframes.

## The Solution
Tumblr allows us to change this default iframe photoset to one made of images and layout data. Photoset Grid can read the layout data and arrange our images, and imagesLoaded can do its magic.

## Tutorial

Work in progress!

## Plans

- Neaten and generalize code, it's still pretty much just a copy of a project I worked on a year ago.
- Add logic to exclude permalink pages from grid layout, example theme is pretty bare bones at the moment.
- Write tutorial

## Credit
Masonry - https://masonry.desandro.com

Infinite Scrolling - https://infinite-scroll.com/

ImagesLoaded - https://imagesloaded.desandro.com/

Photoset Grid - http://stylehatch.github.io/photoset-grid/

