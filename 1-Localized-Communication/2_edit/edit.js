const Jimp = require('jimp');

if (require.main === module) {
  const input = process.argv[2];
  const img_input_path = input; // test_picture.jpg
  const img_output_path = '../edited.jpg'; // inverted.png

  async function main() {
    const image = await Jimp.read(img_input_path);
    image.resize(256, 256).quality(60).write(img_output_path);
    console.log(img_output_path);
  }

  main();
}