// Require Node Dependencies
import * as fs from "fs/promises";
import * as path from "path";

// Require External Dependencies
import fetch from "node-fetch";

// Vars
const imageRegex = new RegExp("\.(gif|jpe?g|tiff?|png|webp|bmp|ico)$", "i");

export interface Image {
  path?: string,
  uri?: string,
}

export interface ResponsePayload {
  base64?: string
}

export async function toBase64(image: Image): Promise<ResponsePayload> {
  let base64: string = "";

  if (image.uri) {
    const uri = new URL(image.uri!);

    try {
      const imageBuffer = await (await fetch(uri)).buffer();

      base64 = imageBuffer.toString('base64');
    }
    catch (error) {
      console.error(error);
    }
  }
  else if (image.path && imageRegex.test(image.path)) {
    let isFile: boolean;

    try {
      isFile = (await fs.stat(image.path)).isFile();
    }
    catch (error) {
      console.error(error);
    }

    if (isFile!) {
      try {
        const imageBuffer = await fs.readFile(path.resolve(image.path));

        base64 = imageBuffer.toString('base64')
      }
      catch (error) {
        console.error(error);
      }
    }
  }
  else {
    throw new Error("Didn\'t get an image or a good uri for the appropriate param");
  }

  return { base64 };
}
