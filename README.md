# imageToBase64
Encode image from uri or image file to base64 on Node.js

## Installation
```$ npm install @rossbob/image-to-base64```

## Unit Test
- Jest
- Coverage : 100%

## Usage

### toBase64(image: Image): Promise<ResponsePayload>

```ts
interface Image {
  path?: string,
  uri?: string,
}

interface ResponsePayload {
  base64?: string
}
```

```js
async function main() {
  const imageBase64WithFile = await encoder.toBase64({ path: "./hdm-panda-chine.jpg" });

  const imageBase64WithURI = await encoder.toBase64({ uri: "https://www.ecosia.org/images?q=panda#id=9E3AE73E84FAAFFC7DD4D3725F33ADFD2346CA77" })
}

main().catch(console.error);
```
