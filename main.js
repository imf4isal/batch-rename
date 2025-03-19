import fs from "fs";
import path from "path";

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

  const files = fs.readdirSync(args.folderPath);

  let countRenamed = 0;

  console.log(
    `Starting to rename files with extension '${args.currentExtension}' to '${args.newExtension}' in '${args.folderPath}'`
  );

  for (const file of files) {
    const filePath = path.join(args.folderPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      continue;
    }

    if (path.extname(filePath) === args.currentExtension) {
      const baseName = path.basename(filePath, args.currentExtension);
      const newName = path.join(
        args.folderPath,
        `${baseName}${args.newExtension}`
      );

      try {
        fs.renameSync(filePath, newName);
        console.log(`Renamed: ${file} → ${path.basename(newName)}`);
        countRenamed++;
      } catch (err) {
        console.error(`Error renaming ${file}: ${err.message}`);
      }
    }
  }

  console.log(
    `\nOperation completed: ${countRenamed} files renamed from ${args.currentExtension} to ${args.newExtension}`
  );
}

main();
