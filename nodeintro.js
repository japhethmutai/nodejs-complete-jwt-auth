// How NodeJS Differs with VanillaJS
// 1) Node runs on a server - not in a browser (backend not frontend)
// 2) The console is the terminal window
console.log("Hello World");
// 3) Global object instead of the window object
// console.log(global);
// 4) Has Common Core modules
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS APIs like fetch

// "uuid": "^8.3.2" => 8 => major version, 3 => minor version, 2 => patch version; ^ => update patch and minor version, but do not update major version.
// npm i uuid@8.3.1 => install specific uuid version
// "uuid": "~8.3.2" => ~ means allows updates only on patch version but not on minor and major versions.
// "uuid": "*" => * => update everything all the time
// npm update => npm will check for updates for the packages
// npm uninstall || npm un || npm rm package-name
const os = require('os');
const path = require('path');
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));