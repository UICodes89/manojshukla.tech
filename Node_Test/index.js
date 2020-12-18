class myClass {
    constructor() {
        console.log("Process Inititated....")
    }
    testPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(1), 3000)
        }).then((result) => {
            return result * 2;
        })
    }
    sayHello() {
        console.log("Hello");
    }
    add(arg1, arg2) {
        return arg1 + arg2;
    }
    callAnotherFn(arg1, arg2) {
        this.sayHello();
        return this.add(arg1, arg2);
    }
}

module.exports = myClass;