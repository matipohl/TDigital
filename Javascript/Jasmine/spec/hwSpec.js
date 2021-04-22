//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
function Sum1toN(n) {
    var sum = 0;
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
//devuelve la suma del primer y último número en el array
function sumFirstLast(arr) {
    return arr[0] + arr[arr.length - 1];
}

function sumMaxMin(arr) {
    return Math.max(...arr) + Math.min(...arr);
}


//sum1toN
describe("Sum1toN", function() {
    it("should return 3 when we pass 2 as an argument", function() {
        expect(Sum1toN(2)).toEqual(3);
    });
    it("should return 6 when we pass 3 as an argument", function() {
        expect(Sum1toN(3)).toEqual(6);
    });
    it("should return 10 when we pass 4 as an argument", function() {
        expect(Sum1toN(4)).toEqual(10);
    });
});


//sumFirstLast
describe("sumFirstLast", function() {
    it("should return 3 when we pass [1,2] as an argument", function() {
        expect(sumFirstLast([1, 2])).toEqual(3);
    });
    it("should return 10 when we pass [2,3,8] as an argument", function() {
        expect(sumFirstLast([2, 3, 8])).toEqual(10);
    });
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() {
        expect(sumFirstLast([-6, 23, 3, -4])).toEqual(-10);
    });
});

//sumMaxMin

describe("sumMaxMin", function() {
    it("should return 11 when we pass [1,3,10] as an argument", function() {
        expect(sumMaxMin([1, 3, 10])).toEqual(11);
    });
    it("should return -12 when we pass [-2,-5,-10] as an argument", function() {
        expect(sumMaxMin([-2, -5, -10])).toEqual(-12);
    });
    it("should return 17 when we pass [-6,23,3,-4] as an argument", function() {
        expect(sumMaxMin([-6, 23, 3, -4])).toEqual(17);
    });
});