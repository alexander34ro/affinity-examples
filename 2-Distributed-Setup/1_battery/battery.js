const os = require('os');

if (require.main === module) {
  if (os.platform() === 'android') {
    const exec = require('child_process').exec;

    exec(
      'termux-battery-status',
      (error, stdout, stderr) => {
        console.log(stdout);
      }
    );
  } else {
    const battery = require("battery");
 
    (async () => {
        console.log(await battery());
    })();
  }
}
