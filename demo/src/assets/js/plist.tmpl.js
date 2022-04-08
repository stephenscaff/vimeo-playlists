'use strict'

import { formatTime } from '../../../../src'

/**
 * plistTemplate
 * Markup template for playlist items
 * Wrapping <article='plist-item'> added via doc frag helperss
 * @param {obj} data - response object of video info from vimeo promise
 * @return {string} returns template literal
 */
export default function playlistTmpl(data) {
  let timeDuration = formatTime(data.duration)

  return `
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
  `
}
