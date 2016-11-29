(function() {
  'use strict';
  var chai = require('chai');
  var expect = chai.expect;

  var quest = require('../app/minmax.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(quest.findMinMax([1, 2, 3, 4])).to.eql([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(quest.findMinMax([6, 4])).to.eql([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(quest.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).to.eql([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(quest.findMinMax([4, 4, 4, 4])).to.eql([4]);
      });

    });

  });

})();

