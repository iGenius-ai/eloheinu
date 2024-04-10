const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'dqbiqqmsl', 
  api_key: '846174164144911', 
  api_secret: 'JhC9Axjxaueq3ton12FDtDGQ0Cw',
  secure: true
});

module.exports = { cloudinary }