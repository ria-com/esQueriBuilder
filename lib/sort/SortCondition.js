"use strict";

function SortCondition(field, order) {
  this.field = field;
  this.order = order === SortCondition.prototype.DESC ? SortCondition.prototype.DESC : SortCondition.prototype.ASC;
}


SortCondition.prototype.ASC = 'asc';
SortCondition.prototype.DESC = 'desc';

SortCondition.prototype.get = function () {
  let result = {};
  result[this.field] = {order:this.order};
  return result;
};

module.exports = SortCondition;
