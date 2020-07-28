# 📼 VimeoPlaylist!

A JS lib using the Vimeo Player API to create a playlist of Vimeo Vids (from Vimeo IDs).

Features
- Playlist built with array of Vimeo IDs or external JSON file
- UI for playlist items
- Output of Player, Playlist, Playlist Nav, Fullscreen Toggle conforms to your markup/setup
- Continuous `autoplay` of playlist items
- Equalizer animation when playing
- Playlist navigation,
- Fullscreen API control
- Vimeo API options like `width`, `color`, `player controls`, `muted`, `title`
- and other _maybe_ useful options.


[Live Demo of Vimeo Playlists→](https://stephenscaff.github.io/vimeo-playlists/)



## 📦 Dependencies

- `@vimeo/player`(derps)


## Quickstart

**Install from NPM**

`npm i vimeoplaylist`


**JS**
```
import VimeoPlaylist form 'vimeoplaylist'

// Plugin Options (with internal data array)
let options = {
  hasPlaylist: true,
  color: '#6c77f7',
  playlist: [
    { "id": "288588748" },
    { "id": "328536852" },
    { "id": "281449879" }
  ]
}

// Init on #js-player
let vids = new VimeoPlaylist('js-player', options).init()
```

**Markup**
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
<div id="js-vp-playlist" class=""playlist>
```

**Styles**
Wanted to keep the concerns seperate,, but see the `demo` project for some bsic styles/scss if you don't wanna hand roll your own.


## 🤖 Project Commands


**Install Project Deps**

`npm i`


**Build**

`npm run build`

Builds `src` with `microbundle` to the various common js patterns.


**Run Dev**

`npm run dev`

Dev fires up a server watching the files via `parcel.js`


**Run Demo**

`npm run demo:start`

Run a demo project using the lib and fire up a local server using `parcel.js`.
Didn't want to make decisions on the styling of output, but the demo project has styles to get you going if so desired.


**Lint**

`npm run lint`


**Prettier / Format**

`npm run format`


### Usage - Data as External JSON File (with Babel or Parcel)

```
import VimeoPlaylist from 'vimeoplaylist'
import data from '../data/playlist.json'

let options = {
  playlist: data,
  hasPlaylist: true,
  playlistOutput: '#js-playlist',
  muted: false,
  controls: true,
  color: '#6c77f7',
  fullscreenToggle: '#js-vp-fstoggle',
  fullscreenToggleKeyCode: 'Digit1'
}

let vids = new VimeoPlaylist('js-player', options).init()
```

### Usage - Data as External JSON File (with `Request()`)

```
import VimeoPlaylist from 'vimeoplaylist'

/**
 * Init VimeoPlaylist class
 * Inside request of external data source
 */
const req = new Request('assets/data/playlist.json') // external json of playlist

fetch(req)
  .then(response => response.json())
  .then(data => {
    let options = {
      playlist: data,
      hasPlaylist: true,
      playlistOutput: '#js-playlist',
      controls: true // etc...
    }
    let vids = new VimeoPlaylist('js-vp-player', options).init()
})
```

**Example JSON file**
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

## Usage - Data as array of IDs

```
import VimeoPlaylist form 'vimeoplaylist'

// Plugin Options (with internal data array)
let options = {
  color: '#6c77f7',
  hasPlaylist: true,
  playlistOutput: '#js-vp-playlist',
  playlist: [
    { "id": "288588748" },
    { "id": "328536852" },
    { "id": "281449879" }
  ]
}

// Init on #js-player
let vids = new VimeoPlaylist('js-player', options).init()
```

**Markup**

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

### Playlist Template

`src/plist.tmpl.js` contains the markup for playlist items.
It looks like this:

```
<article='plist-item'>
  <a class="plist-item__link" data-vimeo-id="${data.id}" tabindex="0">
    <figure class="plist-item__thumb">
      <div class="plist-item__thumb-color">
        <img class="plist-item__thumb-img" src="${data.thumbnail_large}"/>
        <svg class="plist-item__icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" width="50" height="50" viewBox="0 0 36 36">
          <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
        </svg>
      </div>
    </figure>
    <div class="plist-item__main">
      <span class="plist-item__title">${data.title}</span>
      <span class="plist-item__user">${data.user_name}</span>
      <span class="plist-item__time-dur">${timeDuration}</span>
      <div class="equalizer">
        <span class="equalizer__item"></span>
        <span class="equalizer__item"></span>
        <span class="equalizer__item"></span>
      </div>
    </div>
  </a>
</article>
```

When related Vid is playing, the playlist item rocks an `is-playing` class.
Again, see the `demo` project/folder for some `scss` styles if you don't want to hand-roll your own from scratch.


## 🕹 Options

| Option                    | Type                            | Description                                              | Default           |
| ------------------------- | ------------------------------- | -------------------------------------------------------- | ----------------- |
| `hasPlaylist`             | Boolean                         | Make false if you need endless vids, but not playlist ui | `true`            |
| `playlistOutput`          | string                          | id or class to output playlist                           | `#js-vp-playlist` |
| `playlist`                | Array of Objects                | playlist as array of objects { "id" : <vimeoid> }        | `[]`              |
| `playlistNavPrev`         | String / Element ID             | id of Prev nav element                                   | `#js-vp-prev`     |
| `playlistNavNext`         | String / Element ID             | id of Next element                                       | `#js-vp-next`     |
| `width`                   | Number                          | Video width in px                                        | `900`             |
| `title`                   | Boolean                         | Show video title                                         | `false`           |
| `muted`                   | Boolean                         | Mute vids                                                | `false`           |
| `controls`                | Boolean                         | Show player controls                                     | `true`            |
| `autoplay`                | Boolean                         | Autoplay vids (required for continuous playlist vids)    | `true`            |
| `fullScreenToggle`        | Boolean                         | Clicking `Enter` triggers fullscreen vid                 | `false`           |
| `color`                   | String (3 or 6 digit hex value) | Player ui color                                          | `#7B8EF9`         |
| `fullscreenToggle`        | String / Element ID             | id of fullscreen video toggle control                    | `#js-vp-fstoggle` |
| `fullscreenToggleKeyCode` | String / Element ID             | full screen toggle keycode                               | `Digit1`          |


### 🧭 Playlist Navigation

Options exist for playlist navigation.

**Default Nav ids**

```
<!-- Playlist Nav -->
<nav class="playlist__nav">
  <button id="js-vp-prev" class="playlist__prev"><i>←</i> Prev</button>
  <button id="js-vp-next" class="playlist__next">Next <i>→</i></button>
</nav>
```

**Customize Nav Ids**

```
let options = {
  ...
  playlistNavNext: '#js-next',
  playlistNavPrev: '#js-prev',
}
```

### 🖥️ Fullscreen Toggle

Leverage the fullscreen api to launch currently playing vid as fullscreen.
Fullscreen mode repains during autoplay.

**Default FS Toggle**

```
<!-- Playlist Full Screen Toggle -->
<button id="js-vp-fstoggle" class="playlist__fstoggle">Fullscreen</button>
```

**Customize FS Toggle Ids**

Provide a `KeyboardEvent.code` string.

```
let options = {
  ...
  fullscreenToggleKeyCode: 'Digit1',
}
```

## 📅 ToDos

- Provide template for displaying current Video's info (title, author, times, etc)
- Option for custom playlist template
- Perhaps support for multiple instances per page, with everything scoped to element.
