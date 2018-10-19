class Complex {
    private real: number;
    private imaginary: number;

    constructor(realNumber: number, imaginaryNumber: number) {
        this.real = realNumber;
        this.imaginary = imaginaryNumber;
    }

    getReal(): number {
        return this.real;
    }

    getImaginary(): number {
        return this.imaginary;
    }

    public add(complexNumber: Complex) {
        this.real += complexNumber.getReal();
        this.imaginary += complexNumber.getImaginary();
    }

    public subtract(complexNumber: Complex) {
        this.real -= complexNumber.getReal();
        this.imaginary -= complexNumber.getImaginary();
    }

    public modulus(): number {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }

    public showValue(): string {
        let sign: string;
        if (this.imaginary < 0) {
            sign = "";
        } else {
            sign = "+"
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


