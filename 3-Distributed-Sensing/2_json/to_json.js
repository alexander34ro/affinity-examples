if (require.main === module) {
  const input = process.argv[2];
  const parsed = JSON.parse(input);
  console.log(parsed);

  const simplified = {}
  simplified.level = parsed.level;
  simplified.charging = parsed.charging;
  if (simplified.level === undefined) {
    simplified.level = parsed.percentage;
    simplified.charging = parsed.plugged != "UNPLUGGED";
  }

  console.log(JSON.stringify(simplified));
}
