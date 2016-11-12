Array.min = function( array ){
    return Math.min.apply( Math, array );
};

console.log(Array.min([1, 3, 5, 10, 25, 15]));