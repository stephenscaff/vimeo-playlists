import Player from '@vimeo/player';
import { createFrag, hasEl, fetchAllVimeoVids } from './utils';
import { VimeoPlaylistOptions, PlaylistItem } from './types'

class VimeoPlaylist {
  private player: any; // Replace 'any' with the appropriate Player type if available
  private el: HTMLElement;
  private options: VimeoPlaylistOptions;
  private playlistItems: NodeListOf<HTMLElement> | null = null;
  private currentVidIdx: number = 0;
  private vidCount: number = 0;
  private activeClass: string = 'is-playing';
  private pausedClass: string = 'is-paused';

  constructor(el: HTMLElement, options: VimeoPlaylistOptions) {
    this.el = el;
    this.options = { ...VimeoPlaylist.defaults, ...options };

    if (!this.hasValidPlayerId(el)) return;

    this.vidCount = this.options.playlist.length;

    this.createPlayer();
  }

  private static defaults: VimeoPlaylistOptions = {
    width: 900,
    loop: false,
    title: false,
    muted: true,
    controls: true,
    autoplay: true,
    color: '#7B8EF9',
    fullscreenToggle: '#js-vp-fstoggle',
    fullscreenToggleKeyCode: null,
    hasPlaylist: true,
    playlistOutput: '#js-vp-playlist',
    playlistNavNext: '#js-vp-next',
    playlistNavPrev: '#js-vp-prev',
    supportsKeyNav: true,
    playlist: [],
    itemTmpl: (item: PlaylistItem) => '', // Adjust this to your actual template
    itemName: 'plist-item',
    itemTrigger: '.plist-item__link',
    debug: false,
  };

  private hasValidPlayerId(el: HTMLElement): boolean {
    if (!hasEl(`#${el.id}`)) {
      console.warn('VimeoPlaylist: Provide a valid ID to render Vimeo Player');
      return false;
    }
    return true;
  }

  private createPlayer(): void {
    const currentPlaylistItem = this.options.playlist[this.currentVidIdx];
    this.player = new Player(this.el, {
      id: currentPlaylistItem.id,
      width: this.options.width,
      title: this.options.title,
      muted: this.options.muted,
      controls: this.options.controls,
      autoplay: this.options.autoplay,
      color: this.options.color,
    });

    this.setupListeners();
    if (this.options.hasPlaylist) this.buildPlaylist();
  }

  private setupListeners(): void {
    this.player.on('ended', () => {
      if (this.options.debug) console.debug('ended');
      this.next();
    });

    this.player.on('pause', () => {
      if (this.options.debug) console.debug('pause');
      this.setPausedState();
    });

    this.player.on('play', () => {
      if (this.options.debug) console.debug('play');
      this.setActiveState();
    });


    this.setupFullScreenToggleListener();
    this.setupNavigationClickListeners();

    if (this.options.supportsKeyNav) {
      this.setupKeyNavigationListener();
    }
  }

  private setupFullScreenToggleListener(): void {
    if (this.options.fullscreenToggleKeyCode) {
      window.addEventListener('keydown', (e) => {
        if (e.code === this.options.fullscreenToggleKeyCode) {
          this.toggleFullscreen();
        }
      }, false);
    }

    if (this.options.fullscreenToggle) {
      const fullscreenToggleElement = document.querySelector(this.options.fullscreenToggle);
      if (fullscreenToggleElement) {
        fullscreenToggleElement.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleFullscreen();
        });
      }
    }
  }

  private setupNavigationClickListeners(): void {
    if (this.options.playlistNavPrev) {
      const prevButton = document.querySelector(this.options.playlistNavPrev);
      if (prevButton) {
        prevButton.addEventListener('click', (e) => {
          e.preventDefault();
          this.prev();
        });
      }
    }

    if (this.options.playlistNavNext) {
      const nextButton = document.querySelector(this.options.playlistNavNext);
      if (nextButton) {
        nextButton.addEventListener('click', (e) => {
          e.preventDefault();
          this.next();
        });
      }
    }
  }

  private setupKeyNavigationListener(): void {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'ArrowRight') this.next();
      if (event.code === 'ArrowLeft') this.prev();
    }, false);
  }

  private setActiveState(): void {
    const active = document.querySelector(`.${this.activeClass}`);
    const paused = document.querySelector(`.${this.pausedClass}`);
    if (active) active.classList.remove(this.activeClass);
    if (paused) paused.classList.remove(this.pausedClass);
    if (this.options.hasPlaylist && this.playlistItems && this.playlistItems[this.currentVidIdx]) {
      this.playlistItems[this.currentVidIdx].classList.add(this.activeClass);
    }
  }

  private setPausedState(): void {
    const active = document.querySelector(`.${this.activeClass}`);
    if (active) active.classList.add(this.pausedClass);
  }

  private playVideo(itemIndex: number): void {
    this.currentVidIdx = itemIndex;
    const playlistItem = this.options.playlist[this.currentVidIdx];
    this.loadVideo(playlistItem);
    this.setActiveState();
  }

  private next(): void {
    this.currentVidIdx = (this.currentVidIdx + 1) % this.vidCount;
    this.loadVideo(this.options.playlist[this.currentVidIdx]);
  }

  private prev(): void {
    this.currentVidIdx = (this.currentVidIdx - 1 + this.vidCount) % this.vidCount;
    this.loadVideo(this.options.playlist[this.currentVidIdx]);
  }

  private loadVideo(playlistItem: PlaylistItem): void {
    this.player.loadVideo(playlistItem.id)
      .then(() => {
        this.setActiveState();
      })
      .catch((err) => {
        if (this.options.debug) {
          console.error(err, 'error loading video');
        }
      });
  }

  private toggleFullscreen(): void {
    const vid = this.player.getIframe(); // Adjust this to your actual method
    if (!document.fullscreenElement) {
      vid.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  private buildPlaylist(): void {
    let counter = 0;
    const fetchedVids = fetchAllVimeoVids(this.options.playlist);

    fetchedVids.then((vids) => {
      vids.forEach((vid) => {
        if (vid == undefined) return;
        let tmpl = this.options.itemTmpl(vid[0]);
        let frag = createFrag(tmpl, 'article', this.options.itemName);
        counter++;

        if (this.options.playlistOutput) {
          const playlistOutput = document.querySelector(this.options.playlistOutput);
          if (playlistOutput) {
            playlistOutput.appendChild(frag);
          } else {
            if (this.options.debug) {
              console.warn('VimeoPlaylist: Provide a valid selector to output playlist');
            }
          }
        }

        if (counter === this.vidCount) {
          this.setupFirstVideo();
          if (!this.options.hasPlaylist) return;
          this.playlistItems = document.querySelectorAll(this.options.itemTrigger);
          this.setupPlaylistClickListeners();
        }
      });
    });
  }

  private setupFirstVideo(): void {
    if (!this.playlistItems) return;
    this.playlistItems[0].classList.add(this.activeClass);
    const playerElement = this.player.getIframe(); // Adjust this to your actual method
    if (playerElement) {
      playerElement.setAttribute('allow', 'autoplay');
      this.player.play();
    }
  }

  private setupPlaylistClickListeners(): void {
    if (this.playlistItems) {
      this.playlistItems.forEach((item, i) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          this.playVideo(i);
        });

        item.addEventListener('keydown', (e) => {
          if (e.code === 'Enter') {
            this.playVideo(i);
          }
        });
      });
    }
  }
}

export default VimeoPlaylist;
