const fs = require("fs");
const parse = require("markmap/parse.markdown");
const transform = require("markmap/transform.headings");

const text = fs.readFileSync("README.md", "utf-8");

const headings = parse(text);
const root = transform(headings);

if (fs.existsSync("assets") === false) {
  fs.mkdirSync("assets");
}

fs.writeFileSync("assets/README.json", JSON.stringify(root));

fs.copyFileSync("node_modules/d3/d3.js", "assets/d3.js");
fs.copyFileSync("node_modules/markmap/d3-flextree.js", "assets/d3-flextree.js");
fs.copyFileSync(
  "node_modules/markmap/view.mindmap.css",
  "assets/view.mindmap.css"
);
fs.copyFileSync(
  "node_modules/markmap/view.mindmap.js",
  "assets/view.mindmap.js"
);
