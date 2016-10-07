"use strict";

let Condition = require('./Condition');

function Script() {
  this.script = {};
  Condition.apply(this, ['script']);
}

Script.prototype = Object.create(Condition.prototype);

Script.prototype.setScript = function (script) {
  return Condition.prototype.setParam.apply(this, ['script', script]);
};

Script.prototype.setScriptParams = function (params) {
  return Condition.prototype.setParam.apply(this, ['params', params]);
};

module.exports = Script;