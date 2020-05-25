const fs = require("fs-extra");

/** Bundles CSS into a js file  */
function cssToJS(cssOrFile, isFile, outputFile) {
  let css;
  if (isFile) {
    css = fs.readFileSync(cssOrFile, { encoding: "utf8" });
  } else {
    css = cssOrFile;
  }

  let js = `
  (function() {
    var __styleElement = document.createElement('style');
    __styleElement.innerHTML = \`${css}\`;
    document.head.appendChild(__styleElement);
  })()
  `;

  if (outputFile) {
    fs.writeFileSync(outputFile, js);
  } else {
    console.log(js);
  }
}

module.exports = { cssToJS };
