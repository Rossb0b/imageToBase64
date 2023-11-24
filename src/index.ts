// Import Node.js Dependencies
import * as fs from "node:fs/promises";
import * as path from "node:path";

// Import Third-Party Dependencies
import fetch from "node-fetch";

// CONSTANTS
const mediaRegex = new RegExp(".(gif|jpe?g|tiff?|png|webp|bmp|ico|wav|mp3|mp4)$", "i");

export interface Media {
  path?: string,
  uri?: string,
}

export interface ResponsePayload {
  base64?: string
}

export async function toBase64(media: Media): Promise<ResponsePayload> {
  let base64: string = "";

  if (media.uri) {
    const uri = new URL(media.uri!);

    const image = await fetch(uri);

    const imageBuffer = await image.buffer();

    base64 = imageBuffer.toString('base64');
  }
  else if (media.path && mediaRegex.test(media.path)) {
    let isFile: boolean;

    isFile = (await fs.stat(media.path)).isFile();
    if (isFile!) {
      const imageBuffer = await fs.readFile(path.resolve(media.path));

      base64 = imageBuffer.toString('base64');
    }
  }
  else {
    throw new Error("Didn't get any valid media or uri.");
  }

  return { base64 };
}
