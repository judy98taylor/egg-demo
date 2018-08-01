"use strict";

// had enabled by egg
// exports.static = true;

// https://eggjs.org/zh-cn/tutorials/restful.html
exports.validate = {
  enable: true,
  package: "egg-validate"
};
// https://www.npmjs.com/package/egg-cors
exports.cors = {
  enable: true,
  package: "egg-cors"
};
