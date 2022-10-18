function compose() {
    let funcs = arguments;

    return function() {
        var args = arguments;
        for (var i = funcs.length; i --> 0;) {
            args = [funcs[i].apply(this, args)];
        }
        return args[0];
    }
}


//or

const compose = (...fns) => arg => fns.reduceRight((res, fn) => fn(res), arg);


function compose(...args) {
    return function(n) {
        args.reverse().forEach((i) => n=i(n));
        return n;
    }
}
