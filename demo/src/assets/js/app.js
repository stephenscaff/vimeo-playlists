'use strict'

// Normally, include via NPM
// import VimeoPlaylist form 'vimeoplaylist'

import VimeoPlaylist from '../../../../src/VimeoPlaylist.js'

// External Data
import data from '../data/playlist.json'

// Plugin Options
let options = {
  hasPlaylist: true,
  color: '#6c77f7',
  fullscreenToggle:  '#js-vp-fstoggle',
  fullscreenToggleKeyCode: 'Digit1',
  hasPlaylist: true,
  playlistOutput: '#js-vp-playlist',
  playlist: data
}

// Init on #js-player
let vids = new VimeoPlaylist('js-vp-player', options).init()
