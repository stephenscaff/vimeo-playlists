import playlistTmpl from './plist.tmpl';
// declare module '@vimeo/player' {
//   // Define types for the '@vimeo/player' module if needed.
// }

declare module './utils' {
  // Define types for the './utils' module if needed.
}

declare module './plist.tmpl' {
  // Define types for the './plist.tmpl' module if needed.
}

export interface PlaylistItem {
  id: number;
  // Add other properties as needed
}

export interface VimeoPlaylistOptions {
  width: number;
  loop: boolean;
  title: boolean;
  muted: boolean;
  controls: boolean;
  autoplay: boolean;
  color: string;
  fullscreenToggle: string;
  fullscreenToggleKeyCode: string | null;
  hasPlaylist: boolean;
  playlistOutput: string;
  playlistNavNext: string;
  playlistNavPrev: string;
  supportsKeyNav: boolean;
  playlist: PlaylistItem[];
  itemTmpl: (playlistTmpl: PlaylistItem) => string;
  itemName: string;
  itemTrigger: string;
  debug: boolean;
}

declare class VimeoPlaylist {
  constructor(el: HTMLElement, options: VimeoPlaylistOptions);

  private static defaults: VimeoPlaylistOptions;

  private hasValidPlayerId(el: HTMLElement): boolean;

  private init(): void;

  private createPlayer(): void;

  private setupListeners(): void;

  private setupFullScreenToggleListener(): void;

  private setupNavigationClickListeners(): void;

  private setupKeyNavigationListener(): void;

  private onVideoEnd(): void;

  private onVideoPause(): void;

  private onVideoPlay(): void;

  private buildPlaylist(): void;

  private setupFirstVideo(): void;

  private setupPlaylistClickListeners(): void;

  private setActiveState(): void;

  private setPausedState(): void;

  private playVideo(itemIndex: number): void;

  private playNextVideo(): void;

  private playPreviousVideo(): void;

  private loadVideo(playlistItem: PlaylistItem): void;

  private toggleFullscreen(): void;
}

export default VimeoPlaylist;
