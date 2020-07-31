if (require.main === module) {
  const input = process.argv[2];
  const parsed = JSON.parse(input);

  console.log(parsed);
}
