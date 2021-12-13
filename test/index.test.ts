import { toBase64 } from "../src/index";

describe("encode image to base64", () => {

  it("should throw error if param uri isn\'t an uri", async () => {
    expect.assertions(1);

    try {
      await toBase64({ uri: "htt://www.ecosia/images?q=panda#id=9E3AE73E84FAAFFC7DD4D3725F33ADFD2346CA77" })
    }
    catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should throw error if param path isn\'t an image or a valid path", async () => {
    expect.assertions(1);

    try {
      await toBase64({ uri: "../somefile.js" })
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

    it("should return a base64 string for a good uri", async () => {
      const { base64 } = await toBase64({ uri: "https://www.ecosia.org/images?q=panda#id=9E3AE73E84FAAFFC7DD4D3725F33ADFD2346CA77" });
      expect(base64).toBeDefined();
  });

  it("should return a base64 string for a good path", async () => {
    const { base64 } = await toBase64({ path: "hdm-panda-chine.jpg" });
    expect(base64).toBeDefined();
  });
});
