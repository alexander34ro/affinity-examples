if (require.main === module) {
  const input = process.argv[2];

  console.log(input);

  const parsed = JSON.parse(input);

  console.log(parsed);
}
