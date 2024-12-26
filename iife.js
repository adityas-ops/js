//  imediate invoked function expression 
function life() {
    console.log('this is life in global');
}
life();
(function life() {
    console.log('this is invoked function');
})();
