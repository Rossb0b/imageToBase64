module.exports

// Require Node Dependencies
import * as fs from "fs";

// Require External Dependencies
import fetch from "node-fetch";

// Const
const urlRegex = new RegExp('^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?');
const imageRegex = new RegExp('/\.(gif|jpe?g|tiff?|png|webp|bmp|ico)$/i');
