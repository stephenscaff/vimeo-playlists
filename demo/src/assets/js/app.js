'use strict'

import VimeoPlaylist from '../../../../src/VimeoPlaylist.js'
import data from '../data/playlist.json'
/**
 * init VimeoPlaylist class
 * Inside request of external data source
 */
// const req = new Request(data)
//
// fetch(req)
//   .then((response) => {
//     console.log(response.json(), req)
//   })
//   .then((data) => {
//     let options = {
//       playlist: data,
//       hasPlaylist: true,
//       playlistOutput: '#js-playlist',
//       muted: true,
//       controls: true,
//       fullScreenToggle: true,
//       color: '#7B8EF9'
//     }
//     let vids = new VimeoPlaylist('js-player', options).init()
//
//     console.log('req', vids)
//   })

let options = {
  playlist: data,
  hasPlaylist: true,
  playlistOutput: '#js-playlist',
  muted: true,
  controls: true,
  fullScreenToggle: true,
  color: '#7B8EF9'
}

let vids = new VimeoPlaylist('js-player', options).init()
