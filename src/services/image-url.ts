import noimg from "../assets/noimg.webp";

const getCroppedImageUrl = (url: string) => {
  //some games do not have a background image, so we return an empty string
  if (!url) return noimg;
  const index = url.lastIndexOf("media");

  const firstCroppedUrl = url.slice(0, index + "media".length);
  const secondCroppedUrl = url.slice(index + "media".length);
  return firstCroppedUrl + "/crop/600/400" + secondCroppedUrl;
};

export default getCroppedImageUrl;
// Usage example:
// import getCroppedImageUrl from './services/image-url';
// const croppedUrl = getCroppedImageUrl(testUrl);
// console.log("Original URL:", testUrl);
// console.log("Cropped URL:", croppedUrl);

//optimizing the image URL by cropping it to a specific size
// This function takes an image URL and returns a new URL with the image cropped to 600x400 pixels.
