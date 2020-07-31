const fs = require('fs');
const Base64String = require('./Base64String.js');    

if (require.main === module) {
  const input = process.argv[2];
  const img_path = input; // inverted.png
  const stream_path = '3_encoded_image';

  const data = fs.readFileSync(img_path);
  const encodedImage = new Buffer(data, 'binary').toString('base64');
  fs.writeFileSync(stream_path + '_decompressed', encodedImage);
  const compressedImage = Base64String.compress(encodedImage);
  fs.writeFileSync(stream_path, compressedImage);
  console.log('"' + compressedImage + '"');
}
