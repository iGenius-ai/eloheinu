const { uploads } = require("./middleware/cloudinary")
const fs = require("fs");

const uploadImages = async (req, res, next) => {
  const uploader = async (path) => await uploads(path, '/listings/upload');

  const urls = [];
  const files = req.files;

  for (const file of files) {
    const { path } = file;
    const imageURL = await uploader(path);
    urls.push(imageURL)
    fs.unlinkSync(path);
  }
}

module.exports = { uploadImages }