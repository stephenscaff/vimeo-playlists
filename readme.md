# 📼 Vimeo Playlist

A pure JavaScript library to create endless video playlists with the Vimeo Player API. Features playlist UI, controls and customizable template.

Simply define your markup and playlist template, pass an array of Vimeo IDs, profit 💵 💵 💵.

[Demo Playlist→](https://stephenscaff.github.io/vimeo-playlists/)

<br/>

## Contents

1. [📌 Features](#-features)
2. [🎯 Quickstart](#-quickstart)
3. [🧬 Options](#-options)
4. [🤖 Commands](#-commands)
5. [🕹️ Usage](#-usage)
6. [📅 Todos](#-todos)

<br/>

## 📌 Features

- Builds a playlist of Vimeo Videos from an array of Vimeo IDs
- Uses the Vimeo Player API
- UI consists of Video Player, Playlist items (optional), Playlist controls (optional).
- Super flexible - UI conforms to your structre / markup / selectors.
- Playlist items authored via custom template (default included).
- Supports continuous `autoplay`.
- Customizable controls for navigation, play/pause, etc. Includes arrow key nav
- Offers Fullscreen API control for Video player.
- Supports Vimeo API options like `width`, `color`, `player controls`, `muted`, `title`
- Hybrid NPM module, works with `import` and `require`

<br/>

## 📦 Dependencies

- `@vimeo/player`

<br/>

## 🎯 Quickstart

#### 1. Install from NPM

`npm i vimeoplaylist`

#### 2. Define Markup

Create locations for Player, Nav and Playlist

```
<!-- Player -->
<div class="player">
  <div id="js-vp-player" class="player__vid"></div>
</div>

<!-- Playlist Nav -->
<nav class="playlist-nav">
  <button id="js-vp-prev" class="playlist-nav__prev"><i>←</i> Prev</button>
  <button id="js-vp-next" class="playlist-nav__next">Next <i>→</i></button>
</nav>

<!-- Playlist -->
<div id="js-vp-playlist" class="playlist"></div>
```

#### 3. Create Playlist Item Template

Playlist items show info about the tracks (Ie: title, thumbnail, duraction, user, etc). Create a custom template literal (probaly as an external file) to display the info you'd like. The data paramater can access all video / user data returned by Vimeo respoinse object.

[Full list of available properties here](#available-vimeo-response-properties).

```
/**
 * Playlist Item Template
 * Each is item is wrapped in <article='plist-item'></article>
 * @param {obj} data - response object of video info from vimeo promise
 * @return {string} returns template literal
 */

// import included time formater util
import {formatTime}  from 'vimeoplaylist'

export default function playlistTmpl(data) {
  let timeDuration = formatTime(data.duration)

  return `
    <a class="plist-item__link" data-vimeo-id="${data.id}" tabindex="0">
      <figure class="plist-item__thumb">
          <img class="plist-item__thumb-img" src="${data.thumbnail_large}"/>
      </figure>
      <div class="plist-item__main">
        <span class="plist-item__title">${data.title}</span>
        <span class="plist-item__user">${data.user_name}</span>
        <span class="plist-item__time-dur">${timeDuration}</span>
      </div>
    </a>
  `
}
```

#### 4. Setup JS

Initizale the plugin on the defined selector, passing in options for our playlist template and playlist ids. (Complete list of [Options found here](#-options) )

```
import VimeoPlaylist from 'vimeoplaylist'

// Provide custom template for playist items
import playlistTmpl from './plist.tmpl'

// Plugin Options
let options = {
  hasPlaylist: true,
  itemTmpl: playlistTmpl,
  playlist: [
    { "id": "288588748" },
    { "id": "328536852" },
    { "id": "281449879" }
  ]
}

// Create instance on id #js-player
let playlist = new VimeoPlaylist('js-vp-player', options)

// Init
playlist.init()
```

#### 5. Provide Styles

Style as desired. While the core lib doesn't include styles, see the repo's demo project for styles that you can clone as a starting point.

<br/>

## 🧬 Options

The options param supports the following properties:

| Option                    | Type                              | Description                                                                    | Default                         |
| ------------------------- | --------------------------------- | ------------------------------------------------------------------------------ | ------------------------------- |
| `hasPlaylist`             | `Boolean`                         | Make false if you need endless vids, but not playlist ui                       | `true`                          |
| `playlistOutput`          | `String`                          | id or class to output playlist                                                 | `#js-vp-playlist`               |
| `playlistNavPrev`         | `String / Element ID`             | id of Prev nav element                                                         | `#js-vp-prev`                   |
| `playlistNavNext`         | `String / Element ID`             | id of Next element                                                             | `#js-vp-next`                   |
| `playlist`                | `Array of Objects`                | playlist as array of objects { "id" : [vimeoID] }                              | `[]`                            |
| `itemTmpl`                | `HTML Template Literal`           | Template for playlist Items                                                    | Template found at plist.tmpl.js |
| `itemName`                | `String`                          | Parent name of playlist Items (becomes parent class name)                      | `plist-item`                    |
| `itemTrigger`             | `String / Element selector`       | Wrapping Link selector (trigger) of playlist items (matching playlistTemplate) | `plist-item__link`              |
| `supportsKeyNav`          | `Boolean`                         | Enables next/prev key nav                                                      | `true`                          |
| `width`                   | `Number`                          | Video width in px                                                              | `900`                           |
| `title`                   | `Boolean`                         | Show video title                                                               | `false`                         |
| `muted`                   | `Boolean`                         | Mute vids                                                                      | `false`                         |
| `controls`                | `Boolean`                         | Show player controls                                                           | `true`                          |
| `autoplay`                | `Boolean`                         | Autoplay vids (required for continuous playlist vids)                          | `true`                          |
| `color`                   | `String (3 or 6 digit hex value)` | Player ui color                                                                | `#7B8EF9`                       |
| `fullscreenToggle`        | `String / Element ID`             | id of fullscreen video toggle control                                          | `#js-vp-fstoggle`               |
| `fullscreenToggleKeyCode` | `String / Element ID`             | full screen toggle keycode, ie: `KeyF` for `F` key                             | `null`                          |
| `debug`                   | `Boolean`                         | Outputs helpful logs                                                           | `false`                         |

<br/>

## 🤖 Project Commands

#### Install Project Deps

`npm i`

#### Build

`npm run build`

Builds `src` with `microbundle` to the various common js patterns.

#### Run Dev

`npm run dev`

Dev has microbundle begin watching / building the files, while also running the demo project via Parcel, which imports from the local src directory.

#### Run Demo

`npm run demo:start`

Runs the demo project via Parcel.

#### Lint

`npm run lint`

<br/>

## 🕹️ Usage

### Playlist Content

Playlists are created from Vimeo IDs.

Vimeo IDs can be provided to the `playlist` option directly, as an Array of objects, or as an external JSON file.

#### Creating playlist of Vimeo Ids

```
import VimeoPlaylist form 'vimeoplaylist'

// Plugin Options (with internal data array)
let options = {
  playlist: [
    { "id": "288588748" },
    { "id": "328536852" },
    { "id": "281449879" }
  ]
}

// Create instance
let vplaylist = new VimeoPlaylist('js-player', options)

// Init
vplaylist.init()
```

#### Vimeo IDs from JSON file

To use external JSON file, setup you JSON like so:

```
// playlist.json
[
  {
    "id": "288588748"
  },
  {
    "id": "328536852"
  },
  {
    "id": "281449879"
  }
  ....
```

#### Passing IDs as external JSON file (with Babel or Parcel)

```
import VimeoPlaylist from 'vimeoplaylist'
import data from '../data/playlist.json'

let options = {
  playlist: data,
  ...
}

// Create instance
let vplaylist = new VimeoPlaylist('js-player', options)

// Init
vplaylist.init()
```

#### Passing IDs as external JSON file with `Request()`

```
import VimeoPlaylist from 'vimeoplaylist'

const data = new Request('assets/data/playlist.json')

fetch(req)
  .then(response => response.json())
  .then(data => {
    let options = {
      hasPlaylist: true,
      playlistOutput: '#js-vp-playlist',
      playlist: data,
      ...
    }
    let vplaylist = new VimeoPlaylist('js-vp-player', options)
    vplaylist.init()
})
```

<br/>

### Markup / HTML

Construct your markup, adding IDs for the output of the:

- Video player
- Playlist list of items (optional)
- Playlist nav prev and next controls (optional)

```
<!-- Player (main video embed)-->
<div id="js-vp-player"></div>

<!-- Playlist (list of vids) -->
<div id="js-vp-playlist"></div>

<!-- Playlist Nav -->
<nav class="playlist-nav">
  <button id="js-vp-prev" class="playlist-nav__prev"><i>←</i> Prev</button>
  <button id="js-vp-next" class="playlist-nav__next">Next <i>→</i></button>
</nav>
```

You can customize the target ids

```
let options = {
  hasPlaylist: true,
  playlistOutput: '#js-vp-playlist',
  playlistNavPrev: '#js-vp-prev'
  playlistNavNext: '#js-vp-next'
  fullscreenToggle:  '#js-vp-fstoggle',
  fullscreenToggleKeyCode: 'Digit1',
}
```

### Playlist Item Template

Each item in the playlist provides video and user info (ie: id, title, thubnails, url, duration, etc).

You can use the default template or provide your own to customize the layout/markup of each playlist item. Simply create a template literal, perhaps as a seperate file, and pass its reference to the `itemTmpl` option.

#### Playlist Template Example

```
// plist.tmpl

/**
 * Plist Item Template
 * Contents below are wrapped in <article='plist-item'/>
 * @param {obj} data - response object of video info from vimeo promise
 * @return {string} returns template literal
 */
export default function playlistTmpl(data) {
  return `
    <a class="plist-item__link" data-vimeo-id="${data.id}" tabindex="0">
      <figure class="plist-item__thumb">
        <img class="plist-item__thumb-img" src="${data.thumbnail_large}"/>
      </figure>
      <div class="plist-item__main">
        <span class="plist-item__title">${data.title}</span>
        <span class="plist-item__user">${data.user_name}</span>
      </div>
    </a>
  `
}
```

### Pass Playlist template

```
import playlistTmpl from './plist.tmpl'

let options = {
  hasPlaylist: true,
  itemTmpl: playlistTmpl,
  ...
}
```

#### Available Vimeo Response Properties

Your template's data param can use to following properties from Vimeo's reponse object.

| Name                     | Type             | Description                           |
| ------------------------ | ---------------- | ------------------------------------- |
| description              | `String`         | Vid details                           |
| duration                 | `number`         | Vid duration time                     |
| embed_privacy            | `string`         | Privacy embed location, ie: 'anywhere |
| height                   | `number`         | px height of vid                      |
| id                       | `number`         | Vid id                                |
| stats_number_of_comments | `number`         | Number of comments                    |
| stats_number_of_likes    | `number`         | Number of vid's likes                 |
| stats_number_of_plays    | `number`         | Number of vid's plays                 |
| tags                     | `string`         | Comma seperated tags                  |
| thumbnail_large          | `(string\|link)` | Large format vid thumb                |
| thumbnail_medium         | `(string\|link)` | Med format vid thumb                  |
| thumbnail_small          | `(string\|link)` | Small format thumb                    |
| title                    | `string`         | Vid title                             |
| upload_date              | `(string\|date)` | Upload date ie "2019-01-18 10:22:32"  |
| url                      | `(string\|link)` | Vid URL                               |
| user_id                  | `number`         | User ID                               |
| user_name                | `string`         | User name                             |
| user_portrait_huge       | `(string\|link)` | User image 300x300px                  |
| user_portrait_large      | `(string\|link)` | User image 100x100px                  |
| user_portrait_medium     | `(string\|link)` | User image 75x75px                    |
| user_portrait_small      | `(string\|link)` | User image 30x30px                    |
| user_url                 | `(string\|link)` | User url                              |
| width                    | `number`         | Video width in px                     |

#### Playlist Template Requirements

It's important that your playlist template at least have a wrapping trigger/link element as seen in the above example.

**Important:**

The `itemTrigger` option defines the playlist Item wrapping link/trigger used for click events. If you're passing your own `itemTmpl`, make sure to update the `itemTrigger` to match your link's selector name. Will refactor out this requirement in the future.

The `itemName` option is used to define the parent class name of the playlist item block. You might also want to make sure that has some relevance to how you organize item's class names.

**Additional Notes**:

When a playlist item is playing, it will have an `is-playing` class to leverage.
When a playlist item is paused, it will have an `is-paused` class.

### Playlist Navigation

Playlist navigation contols next / prev buttons. You can use the default selectors or provide your own. Keynav arrows are also supported by default.

#### Default Nav ids

```
<!-- Playlist Nav -->
<nav class="playlist__nav">
  <button id="js-vp-prev" class="playlist__prev"><i>←</i> Prev</button>
  <button id="js-vp-next" class="playlist__next">Next <i>→</i></button>
</nav>
```

#### Customize Nav Ids

```
let options = {
  ...
  playlistNavNext: '#js-next',
  playlistNavPrev: '#js-prev',
}
```

### Fullscreen Toggle

Leverage the fullscreen api to launch currently playing vid as fullscreen.
Fullscreen mode repains during autoplay.

```
<!-- Playlist Full Screen Toggle -->
<button id="js-vp-fstoggle" class="playlist__fstoggle">Fullscreen</button>
```

#### Customize FS Toggle Ids

Provide a `KeyboardEvent.code` string for the `fullscreenToggleKeyCode` option.

```
let options = {
  ...
  fullscreenToggleKeyCode: 'Digit1',
}
```

<br/>

### Using Almost Ended (Timeupdate)

The Vimeo Player API _seems_ to have an issue where End Screen overlays the video if the player is scrolled out of view (not visible).

We can _seemingly_ address this by listening until the current video is _almost_ ended, then calling next.
This prevents the End Screen from appearing, which _seems_ desireable for a continous playlist.

So, as of `v2.4.0`, we use `Timeupdate` instead of `ended` to call `next()` when current vid is `0.5s` from end.

<br/>

## 📅 ToDos

- ~~Option for custom playlist template~~
- ~~Document availble data options from Vimeo's reponse object for playlist template.~~
- ~~Make hybrid npm module to support `import` and `require`~~.
- ~~Provide a util method for ellapsed time.~~
- ~~Address issue with End Screen overlaying player/video.~~
- Provide better error handling for 404'd items.
- Since autoplay on load only works if muted due to Chrome policy, provide a button to unmute.
- Provide destory method
- Perhaps support for multiple instances per page, with everything scoped to element.
