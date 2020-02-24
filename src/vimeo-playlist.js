"use strict"

import Player from '@vimeo/player';
import { fetchData, createFrag } from './utils';
import plistItemTemplate from './plist.tmpl';

/**
 * VimeoPlaylist
 * Class for interacting with the Vimeo API
 * to create a continous playlist of vids
 * @class
 * @requires @vimeo/player
 * @param {html element id} el - player element passed to Vimeo's imported Player class.
 * @param {object} options - plugin options for api and playlist ids
 */
function VimeoPlaylist(el, options) {
  options = options || {}
  Object.assign(this, VimeoPlaylist.options, options)

  this.playlistOutput = document.querySelector(this.playlistOutput)
  this.playListItems = []
  this.currentVidIdx = 0
  this.vidCount = this.playlist.length
  this.isActive = false
  this.activeClass = 'is-playing'
  this.pausedClass = 'is-paused'
  this.fullscreenToggle = this.fullScreenToggle

  this.player = new Player(el, {
    id:       this.playlist[this.currentVidIdx].id,
    width:    this.width,
    title:    this.title,
    muted:    this.muted,
    controls: this.controls,
    autoplay: this.autoplay,
    color:    this.color
  });
}

/**
 * VimeoPlaylist Methods
 */
VimeoPlaylist.prototype = {
  constructor : VimeoPlaylist,

  /**
   * Setup and buildPlaylist
   * buildPlaylist makes vimeo api requests
   * and calls playlist logic once those
   * promises resolve.
   */
  init() {
    this.settings()
    this.listeners()
    this.buildPlaylist()
   },

   /**
    * Player settings
    */
   settings() {
     this.player.setColor(this.color)
   },

   /**
    * Player Listeners
    * @fires {onEnd | onPause | onPlay | toggleFullscreen}
    */
   listeners() {

     // Click Enter for fullsreen video
     if (this.fullscreenToggle) {
       document.addEventListener("keypress", (e)=> {
         if (e.keyCode === 13) this.toggleFullscreen()
       }, false);
     }

     // On Vid End
     this.onEnd()
     this.onPause()
     this.onPlay()
   },

  /**
   * LoadVid
   * Helper to load vimeo vids by their ID
   * No need for this.player['play']() and it
   * can cause a browser promise pause() error.
   * @param {string} id - vimeo video id
   */
  loadVid(id) {
    this.player.loadVideo(id).then(() =>{
      this.setActiveState()
    }).catch((err) => {
      // @todo better error handling
      console.error(err, 'error loading video')
    })
  },

  /**
   * OnEnd
   * Listens for when a vid ends.
   * @fires {next}
   */
  onEnd() {
    this.player.on('ended', () =>  {
      console.info('ended')
      this.next()
    });
  },

  /**
   * OnPause
   * @fires setPausedState
   */
  onPause() {
    this.player.on('pause', () =>  {
      console.info('pause')
      this.setPausedState()
    });
  },

  /**
   * On Play
   * Calls setActiveState on play
   * @fires {setActiveState}
   */
  onPlay() {
    this.player.on('play', () =>  {
      console.info('play')
      this.setActiveState()
    });
  },

  /**
   * Build Playlist
   * Constructs playlist markup from this.playlist
   * Fetches playlist info from Vimeo API
   * @external { fetchData | createFrag }
   * @fires { setupFirstVid | handlePlaylistClicks}
   */
  buildPlaylist() {
    let counter = 0;

    this.playlist.forEach((plist, i) => {
      let id = plist.id;
      let vidInfo = fetchData("https://vimeo.com/api/v2/video/"+ id +".json")

      vidInfo.then(obj => {
        counter++;
        let tmpl = plistItemTemplate(obj[0])
        let frag = createFrag(tmpl, 'article', 'plist-item')
        this.playlistOutput.appendChild(frag)

        if (counter === this.vidCount) {

          // define this.playlistItems
          this.playlistItems = document.querySelectorAll('.plist-item__link')

          // handle First Vid logic
          this.setupFirstVid()

          // handle clicks on playlist items
          this.handlePlaylistClicks();
        }
      })
    })
  },

  /**
   * setupFirstVid
   * Handle setup for first vid in sequence
   * @fires { player['play'] }
   */
  setupFirstVid() {
    this.playlistItems[0].classList.add(this.activeClass)
    this.player['play']()
  },

  /**
   * HandlePlaylistClicks
   * Loops over this.playlistItems and listens for
   * clicks to play vid and define currentVidIdx
   * @fires { loadVid | setActiveState }
   */
  handlePlaylistClicks() {
    this.playlistItems.forEach((item, i) => {

      item.addEventListener('click', (e) => {
        e.preventDefault()
        let id = item.dataset.vimeoId;
        this.currentVidIdx = i
        this.loadVid(id)
        this.setActiveState()
      })
    })
  },

  /**
   * Set Active State
   * Toggle active state class
   */
  setActiveState() {
    let active = document.querySelector(`.${this.activeClass}`)
    let paused = document.querySelector(`.${this.pausedClass}`)
    if (active) active.classList.remove(this.activeClass)
    if (paused) paused.classList.remove(this.pausedClass)
    this.playlistItems[this.currentVidIdx].classList.add(this.activeClass)
  },

  /**
   * Set Paused Class
   * Adds Paused Class to active playlist item
   */
  setPausedState() {
    let active = document.querySelector(`.${this.activeClass}`)
    if (active) active.classList.add(this.pausedClass)
  },

  /**
   * Next
   * Tracks current video index and progress to next.
   */
  next() {
    this.currentVidIdx++

    if (this.currentVidIdx < this.vidCount){
      this.currentVidIdx + 1;
    } else {
      this.currentVidIdx = 0;
    }
    this.loadVid(this.playlist[this.currentVidIdx])
  },


  /**
   * Prev
   * Not in use yet, but we may want an actual playlist at some point
   * Or, at least the ability to go forward and backward.
   */
  prev() {},

  /**
   * Toggle Fullscreen
   * Targeted vimeo iframe for full screen vid on Enter
   */
  toggleFullscreen() {
    let vid = document.querySelector('iframe')
    if (!document.vid) {
      vid.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
}

/**
 * Default Options
 */
VimeoPlaylist.options = {
  width: 900,
  loop: false,
  title: false,
  muted: false,
  controls: true,
  autoplay: true,
  color: '#7B8EF9',
  fullscreenToggle: false,
  playlistOutput: '#js-playlist',
  playlist: []
}

export default VimeoPlaylist
