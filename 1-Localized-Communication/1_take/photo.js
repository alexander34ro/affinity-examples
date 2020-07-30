const NodeWebcam = require("node-webcam");
const exec = require("child_process").exec;
const os = require("os");

if (require.main === module) {
  console.log(process.platform);
  console.log(os.type());
  console.log(os.release());
  console.log(os.platform());
  if (os.platform() === "android") {
    exec(
      "termux-camera-photo -c 1 ../test_picture.jpg",
      (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
      }
    );
  } else {
    const Webcam = NodeWebcam.create();
    Webcam.capture("../test_picture.jpg", function (err, data) { console.log(data); });
  }
}
