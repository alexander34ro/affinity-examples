const fs = require("fs");

if (require.main === module) {
  const input = process.argv[2];
  const img_path = '../final.jpg';

  const data = input;
  const buff = new Buffer(data, 'base64');
  fs.writeFileSync(img_path, buff);
  console.log(img_path);
}