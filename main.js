function parseArgs() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.error(
      "Usage: node rename-files.js <folderPath> <currentExtension> <newExtension>"
    );
    console.error("Example: node rename-files.js ./my_subtitles web_vtt srt");
    process.exit(1);
  }

  const folderPath = args[0];
  const currentExtension = args[1].startsWith(".") ? args[1] : `.${args[1]}`;
  const newExtension = args[2].startsWith(".") ? args[2] : `.${args[2]}`;

  return { folderPath, currentExtension, newExtension };
}

function main() {
  const args = parseArgs();

  if (!fs.existsSync(args.folderPath)) {
    console.error(`The folder ${args.folderPath} does not exist.`);
    process.exit(1);
  }

  console.log(args);
}

main();
