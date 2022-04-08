import fetch from 'isomorphic-fetch'

'use strict'

/**
 * Fetch Data utility
 * @param {string || Request} url
 */
export function fetchData(url) {
  console.log('fetch data')
  return fetch(url)
    .then(checkError)
    .then((json) => {
      return json
    })
    .catch((ex) => console.log('failed', ex))
}

/**
 * Error check for Fetch
 * @param {Object} res - fetch response
 * @returns 
 */
function checkError(res) {
  if (!res.ok) {
    throw Error(res.statusText);
}
return res.json();


  // if (res.status >= 200 && res.status <= 299) {
  //   console.log('errors', res )
  //   return res.json();
  // } else {
  //   throw Error(res.statusText);
  // }
}

/**
 * Create Document Fragment Utility
 * Creates a document fragment from string of
 * html dom nodes without page reflow
 * @param {string} htmlStr
 * @param {string} tag - html tag
 * @param {string} className - element class name
 */
export function createFrag(htmlStr, tag, className) {
  let docFrag = document.createDocumentFragment()
  let fragDiv = document.createElement(tag)

  fragDiv.className += className
  fragDiv.innerHTML = htmlStr
  docFrag.appendChild(fragDiv)

  return fragDiv
}

/**
 * Format Time Utility
 * Converts seconds to HH:MM:SS
 * @param {string | number}
 */
export function formatTime(seconds) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60

  return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
    .filter(Boolean)
    .join(':')
}

/**
 * Has Element
 * Util to check if element exists
 * @param {HTML Element}
 * @return {Boolean}
 */
export function hasEl(el) {
  if (document.body.contains(document.querySelector(el))) {
    return true
  }

  return false
}
