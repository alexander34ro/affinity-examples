const fs = require('fs');
const Base64String = require('./Base64String.js');  

if (require.main === module) {
  const input = process.argv[2];
  const img_path = '4_decoded_image.jpg';

  console.log(input);
  const data = Base64String.decompressFromUTF16(input);
  console.log(data);
  const image = new Buffer(data, 'base64');
  fs.writeFileSync(img_path, image);
  console.log(img_path);
}
