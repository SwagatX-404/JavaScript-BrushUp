// Immediately Invoked Function Expressions (IIFE)


(function cutie(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('swagat')