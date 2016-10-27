"use strict";

class Aggregation {
    constructor (name, type) {
        this.name = name;
        this.type = type;
        this.added = [];
        this.injected = [];
        this.params = [];
    }

    add (aggregation) {
        if (!(aggregation instanceof Aggregation)) {
            throw TypeError('Param should be aggregation');
        }
        this.added.push(aggregation);
        return this;
    }

    inject(aggregation) {
        if (!(aggregation instanceof Aggregation)) {
            throw TypeError('Param should be aggregation');
        }
        this.injected.push(aggregation);
        return this;
    }

    setParam(name, value) {
        this.params.push({name, value});
        return this;
    }

    setSize(size) {
        return this.setParam('size', size);
    }

    setMinDocCount(minCount) {
        return this.setParam('min_doc_count', minCount);
    }

    get() {
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
    }
}

module.exports = Aggregation;