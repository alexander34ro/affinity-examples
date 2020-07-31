if (require.main === module) {
  const input = process.argv[2];
  const parsed = JSON.parse(input);

  const simplified = {}
  simplified.level = parsed.level;
  simplified.charging = parsed.charging;

  console.log(simplified);
}
