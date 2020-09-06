if (require.main === module) {
  const input = process.argv[2];
  const parsed = JSON.parse(input);

  const simplified = {}
  simplified.accelerometer = parsed["LSM6DSL Accelerometer"].values;
  simplified.light = parsed["TMD3725 Light"].values;

  console.log(JSON.stringify(simplified));
}
