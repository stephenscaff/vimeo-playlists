import fetch from 'isomorphic-fetch';

/**
 * Fetch Data utility
 * @param {string || Request} url
 */
export function fetchData(url: string | Request): Promise<any> {
  return fetch(url)
    .then(checkError)
    .then((json) => {
      return json;
    })
    .catch((ex) => console.log('failed', ex));
}

/**
 * Fetch all vimeo vids with Promise.all
 * @param {Array} playlist - Array of objects that make up the playlist
 * @returns {Promise} - Combined promises from API requests
 */
export function fetchAllVimeoVids(playlist: { id: number }[]): Promise<any[]> {
  return Promise.all(
    playlist.map((request) => {
      return fetch(`https://vimeo.com/api/v2/video/${request.id}.json`)
        .then((res) => {
          if (res.ok) return res.json();
          else throw new Error('Status code error: ' + res.status);
        })
        .catch((err) => console.log(err));
    })
  );
}

/**
 * Error check for Fetch
 * @param {Object} res - fetch response
 * @returns
 */
function checkError(res: Response): Promise<any> {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res.json();
}

/**
 * Create Document Fragment Utility
 * Creates a document fragment from a string of
 * HTML DOM nodes without page reflow
 * @param {string} htmlStr
 * @param {string} tag - HTML tag
 * @param {string} className - element class name
 */
export function createFrag(htmlStr: string, tag: string, className: string): DocumentFragment {
  const docFrag = document.createDocumentFragment();
  const fragDiv = document.createElement(tag);

  fragDiv.className += className;
  fragDiv.innerHTML = htmlStr;
  docFrag.appendChild(fragDiv);

  return docFrag;
}

/**
 * Format Time Utility
 * Converts seconds to HH:MM:SS
 * @param {string | number}
 */
export function formatTime(seconds: string | number): string {
  const s = typeof seconds === 'string' ? parseFloat(seconds) : seconds;
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;

  return [h, m > 9 ? m : h ? '0' + m : m || '0', sec > 9 ? sec : '0' + sec]
    .filter(Boolean)
    .join(':');
}

/**
 * Has Element
 * Util to check if element exists
 * @param {HTML Element}
 * @return {boolean}
 */
export function hasEl(el: string): boolean {
  if (document.body.contains(document.querySelector(el))) {
    return true;
  }

  return false;
}
