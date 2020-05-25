/* copies dist js files into demo */

const fs = require(`fs-extra`);
const path = require(`path`);

const DIST_PATH = path.resolve(__dirname, `../dist`);
const DEMO_PATH = path.resolve(__dirname, `../demo`);

const distFiles = fs.readdirSync(`${DIST_PATH}`);
const jsFiles = distFiles.filter((f) => f.endsWith(`.js`));
for (const file of jsFiles) {
  fs.copyFileSync(`${DIST_PATH}/${file}`, `${DEMO_PATH}/${file}`);
}
