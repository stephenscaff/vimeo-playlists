'use strict'

// Normally, include via NPM
// import VimeoPlaylist form 'vimeoplaylist'
import VimeoPlaylist from '../../../../src'

// External Data
import data from './playlist.json'
// Custom Playlist Item Template
import playlistTmpl from './plist.tmpl'

// Plugin Options
let options = {
  hasPlaylist: true,
  playlist: data,
  playlistOutput: '#js-vp-playlist',
  color: '#6c77f7',
  fullscreenToggle:  '#js-vp-fstoggle',
  fullscreenToggleKeyCode: 'Digit1',
  playlistTmpl: playlistTmpl
}

// Init on #js-player
const vids = new VimeoPlaylist('js-vp-player', options)
vids.init()
