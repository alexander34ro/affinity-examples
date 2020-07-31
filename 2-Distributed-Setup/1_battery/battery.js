const exec = require('child_process').exec;
const os = require('os');

if (require.main === module) {\
  if (os.platform() === 'android') {
    exec(
      'termux-battery-status',
      (error, stdout, stderr) => {
        console.log(stdout);
      }
    );
  } else {
    const batteryLevel = require('battery-level');

    (async () => {
      console.log(await batteryLevel());
      //=> 0.55
    })();
    const Webcam = NodeWebcam.create();
    Webcam.capture(path, function (err, data) { console.log(data); });
  }
}
