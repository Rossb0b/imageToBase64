const encoder = require("../dist/index.js");

describe("encode image to base64", () => {

  it("should throw error if param uri isn\'t an uri", async () => {
    try {
      await encoder.toBase64({ uri: "htt://www.ecosia/images?q=panda#id=9E3AE73E84FAAFFC7DD4D3725F33ADFD2346CA77" })
    }
    catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should throw error if param path isn\'t an image or a valid path", async () => {
    try {
      await encoder.toBase64({ uri: "../somefile.js" })
    }
    catch (error) {
      expect(error).toBeDefined();
    }
  });

    it("should return a base64 string for a good uri", async () => {
    try {
      const { base64 } = await encoder.toBase64({ uri: "https://www.ecosia.org/images?q=panda#id=9E3AE73E84FAAFFC7DD4D3725F33ADFD2346CA77" });
      expect(base64).toBeDefined();
    } catch (error) {
      throw new Error(error);
    }
  });

  it("should return a base64 string for a good path", async () => {
    try {
      const { base64 } = await encoder.toBase64({ path: "hdm-panda-chine.jpg" });
      expect(base64).toBeDefined();
    } catch (error) {
      throw new Error(error);
    }
  });
});
