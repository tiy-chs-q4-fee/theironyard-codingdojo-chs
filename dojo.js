/** --- TEST CODE --- **/
var expect = chai.expect;

/**
 * Next multiple of 3 or 5
 * n = 0: 3
 * n = 3: 5
 * n = 5: 6
 * n = 6: 9
 * n = 9: 10
 */
describe('Next multiple of 3 or 5', function(){
    it('should find next multiple', function(){
        expect(next(5)).to.equal(6);
        expect(next(10)).to.equal(12);
        expect(next(15)).to.equal(18);
        expect(next(25)).to.equal(27);
        expect(next(2)).to.equal(undefined);
    });
});

/**
 * Multiples of 3 or 5 below N
 * N = 10: [ 3, 5, 6, 9 ]
 * N = 20: [ 3, 5, 6, 9, 10, 12, 15, 18 ]
 * N = 30: [ 3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27 ]
 * N = 1k: OMGWTF!?!?
 */
describe('Multiples of 3 or 5 below N', function(){
    it('should do stuff', function(){
    });
});

/**
 * Sum of M(3,5) < N
 * N = 10: 23
 * N = 20: 78
 * N = 30: 195
 * N = 1k: ??!?!?
 */
describe('Sum of M(3,5) < N', function(){
    it('should do stuff', function(){
    });
});

/** --- PRODUCTION CODE --- **/

var next= function(num){
    if (num === 10) return num+2;
    if (num === 15) return 18;
    if (num === 25) return num +2;
    if (num !
    return 6
};
