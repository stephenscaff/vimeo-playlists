import VimeoPlaylist from './vimeo-playlist.js'
import { formatTime } from './utils'
//export default VimeoPlaylist
// export {VimeoPlaylist, formatTime}

module.exports = VimeoPlaylist; // assign default export to Name
exports = module.exports; // re-assign exports to point it to the updated location.

exports.formatTime = formatTime;