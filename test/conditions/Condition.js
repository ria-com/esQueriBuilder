"use strict";

let Condition = require('./../../lib/conditions').Condition,
    chai = require('chai'),
    expect = chai.expect,


    conditionType = 'type';

describe('Condition', function () {
    describe('.constructor', function () {
        let condition = new Condition(conditionType),
            etalon = { type : {}};

        it (' new instance should be a Condition instance', () => expect(condition).to.be.instanceOf(Condition));

        it('`get` result to be equal to etalon', () => expect(condition.get()).to.be.deep.equal(etalon))
    })
});
