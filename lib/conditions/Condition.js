"use strict";


function Condition(type) {
  this.type = type;
  this.params = [];
}

Condition.prototype.get = function () {
  let result = {};
  result[this.type] = {};


  for (let param of this.params) {
    result[this.type][param.name] = param.value;
  }

  return result;
};

Condition.prototype.setParam = function (name, value) {
  this.params.push({name, value});
  return this;
};

module.exports = Condition;