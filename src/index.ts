// Require Node Dependencies
import {promises as fs} from "fs";
import * as path from "path";

// Require External Dependencies
import fetch from "node-fetch";

// Const
const urlRegex = new RegExp('^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?');
const imageRegex = new RegExp('/\.(gif|jpe?g|tiff?|png|webp|bmp|ico)$/i');

interface Image {
  path?: string,
  uri?: string,
}

export async function toBase64(image: Image): Promise<string | undefined> {
  if (image.uri && urlRegex.test(image.uri)) {
    try {
      const imageBuffer = await (await fetch(image.uri)).buffer();

      return imageBuffer.toString('base64');
    } catch (error) {
      throw new Error(error);
    }
  }
  else if (image.path && imageRegex.test(image.path)) {
    let isFile: boolean;

    try {
      isFile = (await fs.stat(image.path)).isFile();
    } catch (error) {
      throw new Error(error);
    }

    if (isFile) {
      try {
        const imageBuffer = await fs.readFile(path.resolve(image.path));

        return imageBuffer.toString('base64');
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  else {
    throw new Error("Didn\'t get an image or a good uri");
  }
}
