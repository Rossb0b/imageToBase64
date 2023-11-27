<p align="center"><h1 align="center">
  imageToBase64
</h1></p>

<p align="center">
  Encode Media from uri or file to base64 on Node.js
</p>

## Installation
```$ npm install @rossbob/image-to-base64```

## Unit Test
- Jest
- Coverage : 100%

## Usage

### toBase64(image: Media): Promise<string>

```ts
interface Media {
  path?: string,
  uri?: string,
}
```

```js
import { toBase64 } from "@rossbob/image-to-base64";

async function main() {
  const imageBase64WithFile = await toBase64({ path: "./hdm-panda-chine.jpg" });

  const imageBase64WithURI = await toBase64({ uri: "https://www.ecosia.org/images?q=panda#id=9E3AE73E84FAAFFC7DD4D3725F33ADFD2346CA77" })
}

main().catch(console.error);
```
