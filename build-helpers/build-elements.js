const fs = require(`fs-extra`);
const path = require("path");
const concat = require(`concat`);
const { cssToJS } = require(`./css-to-js`);

const DIST_PATH = path.resolve(__dirname, "../dist");

async function build() {
  cssToJS(`${DIST_PATH}/styles.css`, true, `${DIST_PATH}/styles.js`);

  const es2015Files = [
    `${DIST_PATH}/runtime-es2015.js`,
    `${DIST_PATH}/polyfills-es2015.js`,
    `${DIST_PATH}/main-es2015.js`,
    `${DIST_PATH}/styles.js`,
  ];

  const es5Files = [
    `${DIST_PATH}/runtime-es5.js`,
    `${DIST_PATH}/polyfills-es5.js`,
    `${DIST_PATH}/main-es5.js`,
    `${DIST_PATH}/styles.js`,
  ];

  await fs.ensureDir(`${DIST_PATH}/elements`);

  await concat(es5Files, `${DIST_PATH}/elements/es5-chat.js`);
  await concat(es2015Files, `${DIST_PATH}/elements/es2015-chat.js`);
  console.info(`Elements created`);
}

build();
