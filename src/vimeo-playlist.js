/* eslint-disable no-self-assign */
'use strict'

import Player from '@vimeo/player'
import { fetchData, createFrag, hasEl } from './utils'
import playlistTmpl from './plist.tmpl'


/**
 * Default Options
 */
 VimeoPlaylist.defaults = {
  width: 900,
  loop: false,
  title: false,
  muted: true,
  controls: true,
  autoplay: true,
  color: '#7B8EF9',
  fullscreenToggle:  '#js-vp-fstoggle',
  fullscreenToggleKeyCode: 'Digit1',
  hasPlaylist: true,
  playlistOutput: '#js-vp-playlist',
  playlistNavNext: '#js-vp-next',
  playlistNavPrev: '#js-vp-prev',
  supportsKeyNav: true,
  playlist: [],
  playlistTmpl: playlistTmpl
}

/**
 * VimeoPlaylist
 * Class for interacting with the Vimeo API
 * to create a continous playlist of Vimeo vids
 * @constructor
 * @requires @vimeo/player
 * @param {DOMElement} el - player element passed to Vimeo's imported Player class.
 * @param {Object} options - plugin options, playlist, etc.
 *
 * @author Stephen Scaff (github.com/stephenscaff || stephenscaff.com)
 */
function VimeoPlaylist(el, options) {
  options = options || {}
  Object.assign(this, VimeoPlaylist.defaults, options)

  if (!this.hasPlayerId(el)) return

  this.hasPlaylist = this.hasPlaylist
  this.playlistOutput = document.querySelector(this.playlistOutput)
  this.playlistNavPrev = document.querySelector(this.playlistNavPrev)
  this.playlistNavNext = document.querySelector(this.playlistNavNext)
  this.fullscreenToggle = document.querySelector(this.fullscreenToggle)
  this.fullscreenToggleKeyCode = this.fullscreenToggleKeyCode
  this.playListItems = []
  this.currentVidIdx = 0
  this.vidCount = this.playlist.length
  this.isActive = false
  this.activeClass = 'is-playing'
  this.pausedClass = 'is-paused'

  this.player = new Player(el, {
    id: this.playlist[this.currentVidIdx].id,
    width: this.width,
    title: this.title,
    muted: this.muted,
    controls: this.controls,
    autoplay: this.autoplay,
    color: this.color
  })
}

/**
 * VimeoPlaylist Methods
 */
VimeoPlaylist.prototype = {
  constructor: VimeoPlaylist,

  /**
   * Has Player ID
   * Check if we have a valid player element id
   * to render Vimeo.Player
   * @param {Element ID}
   * @return {Boolean}
   */
  hasPlayerId(el) {
    if (!hasEl(`#${el}`)) {
      console.warn(
        'VimeoPlaylist: 😜 Dood, provide a valid ID to render Vimeo Player'
      )
      return false
    }
    return true
  },

  /**
   * Setup and buildPlaylist
   * buildPlaylist makes vimeo api requests
   * and calls playlist logic once those
   * promises resolve.
   */
  init() {
    if (!this.player) return
    this.settings()
    this.listeners()
    if (this.hasPlaylist) this.buildPlaylist()
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
    this.onEnd()
    this.onPause()
    this.onPlay()
    this.onFullScreenToggle()
    this.handleNavClicks()
    if (this.supportsKeyNav) this.handleKeyNav()
  },

  /**
   * LoadVid
   * Helper to load vimeo vids by their ID
   * No need for this.player['play']() and it
   * can cause a browser promise pause() error.
   * @param {string} id - vimeo video id
   */
  loadVid(id) {
    this.player
      .loadVideo(id)
      .then(() => {
        this.setActiveState()
      })
      .catch((err) => {
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
    this.player.on('ended', () => {
      console.info('ended')
      this.next()
    })
  },

  /**
   * OnPause
   * @fires setPausedState
   */
  onPause() {
    this.player.on('pause', () => {
      console.info('pause')
      this.setPausedState()
    })
  },

  /**
   * On Play
   * Calls setActiveState on play
   * @fires {setActiveState}
   */
  onPlay() {
    this.player.on('play', () => {
      console.info('play')
      this.setActiveState()
    })
  },

  /**
   * On Fullscreen Toggle
   * @fires {toggleFullscreen} - if fullscreenToggle
   */
  onFullScreenToggle() {
    //FS Toggle ke
    if (this.fullscreenToggleKeyCode) {
      window.addEventListener(
        'keydown',
        (e) => {
          if (e.code === this.fullscreenToggleKeyCode) this.toggleFullscreen()
        },
        false
      )
    }
    // FS Toggle Click
    if (hasEl(`#${this.fullscreenToggle.id}`)) {
      this.fullscreenToggle.addEventListener('click', (e) => {
        e.preventDefault()
        this.toggleFullscreen()
      })
    }
  },

  /**
   * Build Playlist
   * Constructs playlist markup from this.playlist
   * Fetches playlist info from Vimeo API
   * @external { fetchData | createFrag }
   * @fires { setupFirstVid | handlePlaylistClicks}
   */
  buildPlaylist() {
    let counter = 0

    this.playlist.forEach((plist) => {
      let id = plist.id
      let vidInfo = fetchData('https://vimeo.com/api/v2/video/' + id + '.json')
      // if (!vidInfo) return
      vidInfo.then((obj) => {
        counter++
        let tmpl = this.playlistTmpl(obj[0])
        //let tmpl = plistItemTemplate(obj[0])
        let frag = createFrag(tmpl, 'article', 'plist-item')

        if (this.playlistOutput) {
          this.playlistOutput.appendChild(frag)
        } else {
          console.warn('VimeoPlaylist: Provide a valid playlist id')
        }

        if (counter === this.vidCount) {
          this.setupFirstVid()
          // define this.playlistItems
          if (!this.hasPlaylist) return
          this.playlistItems = document.querySelectorAll('.plist-item__link')
          this.handlePlaylistClicks()
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
    if (!this.playlistItems) return
    this.playlistItems[0].classList.add(this.activeClass)
    this.player.element.setAttribute("allow", "autoplay")
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
        this.currentVidIdx = i
        this.play(this.currentVidIdx)
      })
      item.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
          this.currentVidIdx = i
          this.play(this.currentVidIdx)
        }
      })
    })
  },

  /**
   * Handle Nav Clicks
   * Pal
   */
  handleNavClicks() {
    if (hasEl(`#${this.playlistNavPrev.id}`)) {
      this.playlistNavPrev.addEventListener('click', (e) => {
        e.preventDefault()
        this.prev()
      })
    }
    if (hasEl(`#${this.playlistNavNext.id}`)) {
      this.playlistNavNext.addEventListener('click', (e) => {
        e.preventDefault()
        this.next()
      })
    }
  },

  /**
   * Handle Key Navigation 
   * Keydown listener for next/prev arrow keys control
   */
  handleKeyNav() {
    document.addEventListener(
      "keydown",
      (event) => {
        if (event.code == "ArrowRight") this.next();
        if (event.code == "ArrowLeft") this.prev();
      },
      false
    )
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
    if (this.hasPlaylist)
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
   * Play
   * Plays selected playlist vid by currentIndex
   * @param {number} currentIndex - index
   */
  play(itemIndex) {
    this.currentVidIdx = itemIndex
    this.loadVid(this.playlist[this.currentVidIdx])
    this.setActiveState()
  },

  /**
   * Next
   * Tracks current video index and progress to next.
   */
  next() {
    this.currentVidIdx++

    if (this.currentVidIdx < this.vidCount) {
      this.currentVidIdx + 1
    } else {
      this.currentVidIdx = 0
    }
    this.loadVid(this.playlist[this.currentVidIdx])
  },

  /**
   * Prev
   * Not in use yet, but we may want an actual playlist at some point
   * Or, at least the ability to go forward and backward.
   */
  prev() {
    this.currentVidIdx--

    if (this.currentVidIdx < 0) {
      this.currentVidIdx = 0
    }
    this.loadVid(this.playlist[this.currentVidIdx])
  },

  /**
   * Toggle Fullscreen
   * Targeted vimeo iframe for full screen vid on Enter
   */
  toggleFullscreen() {
    let vid = document.querySelector('iframe')
    if (!document.vid) {
      vid.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }
}



export default VimeoPlaylist
