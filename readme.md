# VimeoPlaylists! 📼

### A js lib using the Vimeo Player API to create a nonstop playlist of Vimeo Vids.

Wanna to make a playlist of Vimeo vids?

To check a simple app using the lib, with styles and all that, checkout [Telly](https://github.com/stephenscaff/telly) (the `example` directory of this project). Telly is a full app with editable styles and a node server and such.


## Build

_Install_
`npm i`

_Run_
`gulp`


## Dependencies
- `@vimeo/player`


## Plugin Usage

*Markup*

```
<!-- Player (main video embed)-->
<div id="js-player"></div>

<!-- Playlist (list of vids) -->
<div id="js-playlist"></div>
```

#### JS - Init Example with `playlist`

```
import VimeoPlaylist from './vimeo-playlist.js' (or whatever you add)

/**
 * Options
 * Internal playlist as array of objects { "id" : <vimeoid> }
 */
VimeoPlaylist.options = {
  width: 1200,
  muted: true,
  controls: true,
  autoplay: true,
  color: '#7B8EF9',
  fullscreenToggle: true,
  playlistOutput: '#js-playlist',
  playlist: [
    { "id": "288588748" },
    { "id": "328536852" },
    { "id": "281449879" }
  ]
}

let vids = new VimeoPlaylist('js-player', options).init()
```

#### JS Options - External JSON File
```
import VimeoPlaylist from './vimeo-playlist.js'

/**
 * Init VimeoPlaylist class
 * Inside request of external data source
 */
const req = new Request('assets/data/playlist.json') // external json of playlist

fetch(req)
  .then(response => response.json())
  .then(data => {
    let options = {
      playlist: data, // Hey data!
      muted: true,
      controls: true // etc...
    }
    let vids = new VimeoPlaylist('js-player', options).init()
})
```

#### JSON File Example

```
// Array of objects
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


## Options

| Option | Type | Description | Default |
| --- | --- | --- | --- |
| `hasPlaylist` | Boolean |  Make false if you need endless vids, but not playlist ui | `true` |
| `playlistOutput` | string | id or class to output playlist | `#js-playlist` |
| `playlist` | Array of Objects | playlist as array of objects { "id" : <vimeoid> } | `[]` |
| `width` | Number | Video width in px | `900` |
| `title` | Boolean | Show video title | `false` |
| `muted` | Boolean | Mute vids | `false` |
| `controls` | Boolean | Show player controls | `true` |
| `autoplay` | Boolean | Autoplay vids (required for continuous playlist vids) | `true` |
| `fullScreenToggle` | Boolean | Clicking  `Enter` triggers fullscreen vid | `false` |
| `color` | String (3 or 6 digit hex value) | Player ui color | `#7B8EF9` |
