const Jimp = require('jimp');

if (require.main === module) {
  const input = process.argv[2];
  const img_input_path = input; // 1_camera_sample.jpg - in our case
  const img_output_path = '2_edited.jpg';

  async function main() {
    const image = await Jimp.read(img_input_path);
    image.resize(8, 8).quality(75).write(img_output_path);
    console.log(img_output_path);
  }

  main();
}