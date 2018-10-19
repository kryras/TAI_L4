"use strict";
class Complex {
    constructor(realNumber, imaginaryNumber) {
        this.real = realNumber;
        this.imaginary = imaginaryNumber;
    }
    getReal() {
        return this.real;
    }
    getImaginary() {
        return this.imaginary;
    }
    add(complexNumber) {
        this.real += complexNumber.getReal();
        this.imaginary += complexNumber.getImaginary();
    }
    subtract(complexNumber) {
        this.real -= complexNumber.getReal();
        this.imaginary -= complexNumber.getImaginary();
    }
    modulus() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    showValue() {
        let sign;
        if (this.imaginary < 0) {
            sign = "";
        }
        else {
            sign = "+";
        }
        return this.real + sign + this.imaginary + "i";
    }
}
let com1 = new Complex(3, 3);
let com2 = new Complex(1, 5);
com1.add(com2);
console.log(com1.showValue());
com1.subtract(com2);
com1.subtract(com2);
console.log(com1.showValue());
console.log(com2.modulus());
