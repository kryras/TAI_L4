var Complex = /** @class */ (function () {
    function Complex(realNumber, imaginaryNumber) {
        this.real = realNumber;
        this.imaginary = imaginaryNumber;
    }
    Complex.prototype.getReal = function () {
        return this.real;
    };
    Complex.prototype.getImaginary = function () {
        return this.imaginary;
    };
    Complex.prototype.add = function (complexNumber) {
        this.real += complexNumber.getReal();
        this.imaginary += complexNumber.getImaginary();
    };
    Complex.prototype.subtract = function (complexNumber) {
        this.real -= complexNumber.getReal();
        this.imaginary -= complexNumber.getImaginary();
    };
    Complex.prototype.modulus = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.showValue = function () {
        var sign;
        if (this.imaginary < 0) {
            sign = "";
        }
        else {
            sign = "+";
        }
        return this.real + sign + this.imaginary + "i";
    };
    return Complex;
}());
var com1 = new Complex(3, 3);
var com2 = new Complex(1, 5);
com1.add(com2);
console.log(com1.showValue());
com1.subtract(com2);
com1.subtract(com2);
console.log(com1.showValue());
console.log(com2.modulus());
