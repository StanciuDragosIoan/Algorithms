//Build a function that takes the array below as input, and a number, and it returns a matrix with the number of columns equal to the input number
// e.g function matrix(vector, 5); --> returns a matrix with 5 cols / matrix(vector, 8) --> returns a matrix with 8 cols


var vector = [75, 4, 69, 19, 14, 31, 55, 85, 63, 62, 44, 34, 38, 4, 30, 57, 32, 86, 75, 86, 13, 20, 14, 38, 99, 10, 51, 76, 38, 90, 58, 58, 68, 70, 89, 48, 46, 39, 68, 89, 94, 68, 78, 67, 75, 37, 75, 98, 21, 79, 53, 49, 56, 55, 81, 56, 98, 57, 6, 87, 57, 94, 25, 13, 6, 70, 59, 32, 42, 57, 48, 82, 47, 24, 0, 71, 30, 98, 27, 77, 71, 33, 51, 13, 49, 98, 75, 64, 41, 19, 81, 62, 10, 78, 81, 98, 48, 72, 74, 35, 76, 35, 16, 94, 36, 53, 97, 61, 15, 5, 81, 92, 51, 58, 50, 60, 34, 50, 53, 22, 3, 79, 63, 41, 71, 7, 88, 90, 70, 99, 53, 82, 41, 46, 50, 17, 58, 39, 77, 32, 65, 74, 92, 34, 60, 93, 77, 54, 53, 20, 5, 52, 69, 98, 41, 22, 28, 89, 41, 83, 29, 59, 13, 70, 85, 86, 42, 10, 22, 30, 43, 16, 78, 34, 63, 84, 14, 0, 81, 98, 42, 71, 59, 0, 65, 12, 84, 67, 62, 22, 86, 98, 81, 35, 37, 73, 45, 55, 6, 53];


function matrix(vector, n) {
    var output = [];
    var row = [];
    for (var i = 0; i < vector.length; i++) {
        row.push(vector[i]);
        if (row.length === n) {
            output.push(row);
            row = [];
        }
    }
    if (row.length > 0) {
        output.push(row);
    }
    // console.table(output);
    return output;

}

console.table(matrix(vector, 3));
//matrix(vector, 10);