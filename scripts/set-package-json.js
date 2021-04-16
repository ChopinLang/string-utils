import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../package.json"))
);
const moduleTypes = ["module", "commonjs"];
const dirs = ["es", "cjs"];

moduleTypes.forEach((moduleType, i) => {
  const fileName = path.join(__dirname, `../dist/${dirs[i]}/package.json`);
  const toWrite = {
    type: moduleType,
    dependencies: packageJson.dependencies,
  };

  fs.writeFileSync(fileName, JSON.stringify(toWrite));
});
