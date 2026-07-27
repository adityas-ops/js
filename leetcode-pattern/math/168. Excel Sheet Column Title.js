

let columnNumber = 701;

var convertToTitle = function(columnNumber) {
    let result = '';
    
    while (columnNumber > 0) {
        columnNumber--; 
        console.log('colm',columnNumber)
        result = String.fromCharCode(65 + (columnNumber % 26)) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    
    return result;
};



console.log(convertToTitle(columnNumber))