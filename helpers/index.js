import RNFetchBlob from "rn-fetch-blob";
import testImage from "../assets/test-ocr.png";

export const imageToB64 = fileName => {
  RNFetchBlob.fs
    .readFile("../assets/test-ocr.png", "base64")
    .then(data => {
      console.log("DATA", data);
    })
    .catch(err => {
      console.log("ERR", err);
    });
};
