"use strict";

Aggregation.prototype.add = function (aggregation) {
  if (!(aggregation instanceof Aggregation)) {
    throw TypeError('Param should be aggregation');
  }
  this.added.push(aggregation);
  return this;
};

Aggregation.prototype.inject = function (aggregation) {
  if (!(aggregation instanceof Aggregation)) {
    throw TypeError('Param should be aggregation');
  }
  this.injected.push(aggregation);
  return this;
};

Aggregation.prototype.setParam = function (name, value) {
  this.params.push({name, value});
  return this;
};

Aggregation.prototype.setSize = function (size) {
  return this.setParam('size', size);
};

Aggregation.prototype.setMinDocCount = function(minCount) {
  return this.setParam('min_doc_count', minCount);
};

Aggregation.prototype.get = function () {
  let result = {};
  result[this.name] = {};
  result[this.name][this.type] = {};

  for (let param of this.params) {
    result[this.name][this.type][param.name] = param.value;
  }


  for (let added of this.added) {
    let aggr = added.get();
    for (let name in aggr) {
      if (aggr.hasOwnProperty(name)) {
        result[name] = aggr[name];
      }
    }
  }

  for (let injected of this.injected) {
    result[this.name].aggs = injected.get();
  }

  return result;
};


function Aggregation (name, type) {
  this.name = name;
  this.type = type;
  this.added = [];
  this.injected = [];
  this.params = [];
}

module.exports = Aggregation;