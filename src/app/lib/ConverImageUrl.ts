// conversi image menjadi base64
export const ImageUrlToBase64 = async (ImageUrl: string): Promise<string> => {
  const response = await fetch(ImageUrl);
  const blop = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blop);
  });
};
