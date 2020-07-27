const NodeWebcam = require("node-webcam");

if (require.main === module) {
  const Webcam = NodeWebcam.create();
  Webcam.capture("../test_picture.jpg", function (err, data) { console.log(data); });
}
