function diagonalSum(mat) {
    let matLen = mat[0].length;
    let sum = 0;
    for(let i = 0; i < matLen; i++){
        // sum of primary & secondary diagonal
        sum = sum + mat[i][i] + mat[i][matLen - i -1];
    }
    // odd square
    if (matLen % 2 !== 0){
        // convert float to int
        let mid = matLen/2 | 0;
        sum = sum - mat[mid][mid];
    }
    return sum;
};

let sum = diagonalSum([[5]]);

console.log(sum)