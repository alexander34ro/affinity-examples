const fs = require("fs");

if (require.main === module) {
  const input = process.argv[2];
  const img_path = input; // inverted.png
  const stream_path = '../stream';

  const data = fs.readFileSync(img_path);
  const encodedImage = new Buffer(data, 'binary').toString('base64');
  fs.writeFileSync(stream_path, encodedImage);
  console.log('"' + encodedImage + '"');
}
