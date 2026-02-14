import fs from 'fs';
import path from 'path';

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const BASE_URL = "/".replace(/\/$/, "");
function getCategoryImages(slug) {
  if (!slug) return [];
  const safeSlug = slug.replace(/[<>:"\/\\|?*]/g, "-");
  const categoryDir = path.join(process.cwd(), "public", "images", "categories", safeSlug);
  try {
    if (!fs.existsSync(categoryDir)) {
      return [];
    }
    const files = fs.readdirSync(categoryDir);
    const images = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext);
    });
    return images.map((img) => `${BASE_URL}/images/categories/${safeSlug}/${img}`);
  } catch (error) {
    console.error(`Error reading category images for ${slug}:`, error);
    return [];
  }
}
function getCategoryImage(slug, defaultImage = `${BASE_URL}/images/default/category.png`) {
  const images = getCategoryImages(slug);
  return images.length > 0 ? images[0] : defaultImage;
}

export { getCategoryImage as g };
