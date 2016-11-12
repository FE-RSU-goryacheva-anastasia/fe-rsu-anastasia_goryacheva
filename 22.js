Array.max = function( array ){
    return Math.max.apply( Math, array );
};

console.log(Array.max([1, 3, 5, 10, 25, 15]));