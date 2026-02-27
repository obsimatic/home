import fs from 'fs';
import path from 'path';

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const BASE_URL = "/".replace(/\/$/, "");
function getProductImages(productId) {
  if (!productId) return [];
  const productDir = path.join(process.cwd(), "public", "images", "products", productId);
  try {
    if (!fs.existsSync(productDir)) {
      return [];
    }
    const files = fs.readdirSync(productDir);
    const images = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    });
    return images.map((img) => `${BASE_URL}/images/products/${productId}/${img}`);
  } catch (error) {
    console.error(`Error reading product images for ${productId}:`, error);
    return [];
  }
}
function getDefaultImage() {
  return "";
}
function getProductImage(productId, defaultImage) {
  const images = getProductImages(productId);
  if (images.length > 0) return images[0];
  return defaultImage || getDefaultImage();
}

export { getProductImages as a, getProductImage as g };
