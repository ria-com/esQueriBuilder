"use strict";

let Term = require ('./../conditions').Term,
    Filter = require ('./Filter');

function TermFilter() {
  Filter.apply(this, ['term']);
  this.term = null;
}

TermFilter.prototype = Object.create(Filter.prototype);

TermFilter.prototype.get = function () {
  let result = {};
  if (this.term) {
    result = this.term.get();
  } else {
    return Filter.prototype.get.apply(this);
  }
  return {filter : result};
};

TermFilter.prototype.addTerm = function (term) {
  if (!(term instanceof Term)) {
    throw new TypeError('Param should be a Term type')
  }
  this.term = term;
  return this;
};

module.exports = TermFilter;